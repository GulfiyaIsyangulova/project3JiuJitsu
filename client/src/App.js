import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Signup from './components/user/Signup.js';
import Login from './components/user/Login.js';
import Navbar from './components/Navbar.js'
import UserProfile from './components/user/UserProfile.js';
import GymDetails from './components/gyms/DetailsComponent.js';
import GymIndex from './components/gyms/GymIndex.js';
import AuthService from './services/AuthService.js';
// import PlacesAutocomplete from 'react-places-autocomplete';
import LocationSearchInput from './components/PlacesAutocomplete';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import PropTypes from 'prop-types'; // ES6
import 'lodash.debounce'

import { compose, withProps } from "recompose"
import { GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from "react-google-maps"
import Geocode from "react-geocode";
import DetailsComponent from './components/gyms/DetailsComponent';





import axios from 'axios';
import GymMap from './components/googleMap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfGyms: [],
      geoLocations: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
      mapReady: false,
      isOpen: false,
      details: {},
    };

    this.service = new AuthService();
    Geocode.setApiKey("AIzaSyCpGcRTL6DiWCcICDtehgpbBfr4DYVN__Q");

  }

  componentDidMount() {
    this.getAllGyms();
    this.getCurrentlyLoggedInUser();
  }

  getAllGyms = () => {
    axios.get(`http://localhost:5000/gyms`)
      .then(responseFromApi => {
        const data = responseFromApi.data;

        this.setState({
          listOfGyms: data, ready: true
        });

        console.log("GYMS INSIDE CALLBACK!");
        console.log(this.state.listOfGyms);
        setTimeout(() => {
          this.setState({ mapReady: true })
        }, 1500)
        this.setGeoLocations();
      });

    console.log("GYMS OUTSIDE CALLBACK!");
    console.log(this.state.listOfGyms);
  }
  
  

  
  setGeoLocations = () => {
   
    console.log("GEO LOCATIONs");

    this.state.listOfGyms.map(gym => {
      return Geocode.fromAddress(gym.address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log("LATITUDE!!")
          console.log(lat, lng);
          // this.state.geoLocations.push({ lat: lat, lng: lng });
          this.setState({ geoLocations: [...this.state.geoLocations, { lat: lat, lng: lng, info: gym}] });
          // console.log("GEO LOCATIONS");
          // console.log(this.state.geoLocations);
        },
        error => {
          console.error(error);
        }
      );
    });
  }
  

  onToggleOpenInfoWindow = (number, gymInfo) => {

    if(gymInfo){
      //make axios call here
      // console.log('VVVVVVVVV',gymInfo)
      
 axios.get(`http://localhost:5000/gyms/getPlacesDetails/` + gymInfo.info.place_id)
 .then(responseFromApi => {
      const data = responseFromApi.data.result;
      // const lat = data.geometry.location.lat;
      // const lng = data.geometry.location.lng;
      // const name =data.name;
      // const icon =data.icon;
      // const price_level= data.price_level;
      // const rating= data.rating;
      // const phone = data.formatted_phone_number;
      // const address= data.formatted_address;
      // const website= data.website;
      // const hours= data.opening_hours.weekday_text;
      // const reviews= [...data.reviews];
      // const photoArr= [...data.photo];

      

  console.log('-------------------------',data);
  console.table('-------------------------',data)


//res.json

  this.setState({ isOpen: number , ready: true, details: data})
      });

    }
  }


  

  getCurrentlyLoggedInUser = () => {
    this.service.currentUser()
      .then((theUser) => {
        this.setState({ currentlyLoggedIn: theUser })
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null })
      })
  }


  toggleForm = (whichForm) => {

    let theForm;

    if (whichForm === "signup") {
      theForm = 'signupShowing'
    } else {
      theForm = 'loginShowing'
    }

    this.setState({ [theForm]: !this.state[theForm] })


  }

 

  render() {


   
    if (this.state.mapReady)
      return (
        <div>
          <h1>Jiu-Jitsu app</h1>

          <GymMap geoLocations={this.state.geoLocations} onToggleOpenInfoWindow={this.onToggleOpenInfoWindow} isOpen={this.state.isOpen}  />

          <Navbar
            theUser={this.state.currentlyLoggedIn}
            pleaseLogOut={() => this.service.logout()}
            toggleForm={this.toggleForm}
            getUser={this.getCurrentlyLoggedInUser}

          />

          {this.state.signupShowing &&
            <Signup getUser={this.getCurrentlyLoggedInUser}
              toggleForm={this.toggleForm}
            />
          }

          {this.state.loginShowing &&
            <Login getUser={this.getCurrentlyLoggedInUser}
              toggleForm={this.toggleForm}
            />
          }
          <LocationSearchInput />

          <Switch>
            <Route exact path="/gyms" component={GymIndex} render={(props) => <GymIndex
              {...props}
              theUser={this.state.currentlyLoggedIn}
              allTheGyms={this.state.listOfGyms} />} />

            <Route exact path="/gyms/:theID" render={(props) => <GymDetails
              {...props}
              allTheGyms={this.state.listOfGyms}
              ready={this.state.ready}
              getData={this.getAllGyms}
              theUser={this.state.currentlyLoggedIn}
            />} />


<DetailsComponent info = {this.state.details} />

          </Switch>
          {this.state.listOfGyms.map((gym, i) => {
            return (
              <div key={i}>
                {/* <h1>{gym.name}</h1> */}
                {/* <h2>{gym.address}</h2> */}

              </div>

            );
          })}



        </div>
      )
    else
      return (
        <div>

          <div className="overlay"></div>
        </div>
      );
  }
}
export default App;
