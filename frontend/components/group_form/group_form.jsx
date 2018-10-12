import React from 'react';
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
 geocodeByAddress,
 geocodeByPlaceId,
 getLatLng,
} from 'react-places-autocomplete';

class CreateGroup extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      title: '',
      location: '',
      about: '',
      category: '',
      user_id: props.currentUser.id
    }
    this.updateLocation = this.updateLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.options= {
     types: ['(cities)'],
     componentRestrictions: {country: "us"}
    };
  }


  updateLocation(field) {
    // debugger
    return(e) => {
      // debugger
      this.setState({[field]: e});
    }
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    this.props.createGroup(group).then(() => this.props.history.push('/show'));
  }


  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };




  visibility(question, scroll, givenButton) {
    let x = document.getElementById(question);
    x.classList.remove('hidden');

    let button = document.getElementById(givenButton);
    button.classList.add('hidden');

    document.getElementById(scroll).scrollIntoView();


  }

  render() {
    return (
      <div>
        <div className="head-picture">
          <h1 >Start a new Group</h1>
          <h4>We'll help you find the right people to make it happen.</h4>
        </div>
        <div className="group-create">
          <form className="group-form" onSubmit={this.handleSubmit}>
            <div className="location-input">
              <img className="image-style" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
              <div className="location-input-text">
                <h6>STEP 1 OF 4</h6>
                <h2>What's your new Group&#39;s Hometown?</h2>







          <PlacesAutocomplete
            value={this.state.location}
            onChange={this.updateLocation('location')}
            onSelect={this.handleSelect}

            type="text"
       >
         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
           <div>
             <input
               {...getInputProps({
                 placeholder: 'Pick your location',
               })}
             />
             <div className="autocomplete-dropdown-container">
               {loading && <div>Loading...</div>}
               {suggestions.map(suggestion => {
                 const className = suggestion.active
                   ? 'suggestion-item--active'
                   : 'suggestion-item';
                 // inline style for demonstration purpose
                 const style = suggestion.active
                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
                 return (
                   <div
                     {...getSuggestionItemProps(suggestion, {
                       className,
                       style,
                     })}
                   >
                     <span>{suggestion.description}</span>
                   </div>
                 );
               })}
             </div>
           </div>
         )}
         </PlacesAutocomplete>







         <button id="buttonOne" onClick={()=>this.visibility('question-2', 'service', 'buttonOne')}>Next</button>

              </div>
            </div>
            <div id="service">
              <div id="question-2" className="location-input hidden">
                <img className="image-style" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>
                <div className="location-input-text">
                  <h6>STEP 2 OF 4</h6>
                  <h2>What category is your Group in?</h2>
                  <input type="text"
                    value={this.state.category}
                    onChange={this.update('category')}
                    placeholder= "Search for a Topic"
                    />
                  <button id="button-two" onClick={()=>this.visibility('question-3', 'naming', 'button-two')}>Next</button>
                </div>
              </div>
            </div>
            <div id='naming'>
              <div id="question-3" className="location-input hidden">
                <img className="image-style" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                <div className="location-input-text">
                  <h6>STEP 3 OF 4</h6>
                  <h2>What will your Group Name Be?</h2>
                  <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder= "Example: Hikers Unite"
                    />

                  <h2 className="input-textarea">Describe who should join, and what your Group will do</h2>
                  <textarea value={this.state.about}
                    onChange={this.update('about')}
                    />
                  <button id="buttonThree" onClick={()=>this.visibility('question-4', 'terms', "buttonThree")}>Next</button>
                </div>
              </div>
            </div>

            <div id="terms">
              <div id="question-4" className="location-input hidden">
                <img className="image-style" src="https://secure.meetupstatic.com/s/img/533695931247066883484/start_v2/people.svg"/>
                <div className="location-input-text">
                  <h6>STEP 4 OF 4</h6>
                  <h2>What it means to have a group</h2>
                  <ul>
                    <li>Real, in-person conversations</li>
                    <li>Open and honest intentions</li>
                    <li>Always safe and respectful</li>
                    <li>Put your members first</li>
                  </ul>
                  <p>We review all Meetups based on our <a href="#">Community Guidelines.</a></p>

                </div>
              </div>
            </div>
            <input className="button-create" type="submit" value="Create Group" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateGroup);
