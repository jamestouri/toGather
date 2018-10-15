import React from 'react';
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
 geocodeByAddress,
 geocodeByPlaceId,
 getLatLng,
} from 'react-places-autocomplete';


class EventForm extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
        title: '',
        location: '',
        body: '',
        date_time: '',
        imageFile: undefined,
        imageUrl: undefined,
        user_id: props.user.id,
        group_id: this.props.location.state.groupId
      }
      this.updateLocation = this.updateLocation.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFile = this.handleFile.bind(this);

    }


    updateLocation(field) {
      return(e) => {
        this.setState({location: e});
      }
    }

    update(field) {
      console.log(this.state);
      return(e) => {
        this.setState({[field]: e.target.value});
      }
    }


    handleSubmit(e) {
      e.preventDefault();
      // const group = Object.assign({}, this.state);
      const formData = new FormData();
      formData.append('group[title]', this.state.title);
      formData.append('group[location]', this.state.location);
      // add our coordinates
      formData.append('group[body]', this.state.body);
      formData.append('group[category]', this.state.category);
      if (this.state.imageFile) {
        formData.append('group[image]', this.state.imageFile);
      }
     this.props.createEvent(formData).then(() => this.props.history.push('/show'));
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


    handleFile(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({ imageFile: file, imageUrl: fileReader.result });
      };
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

  handleLocation(suggestion) {
    this.setState({
      location: suggestion
    })
    let x = document.getElementById('auto-input');
    x.classList.add('hidden');
  }


  render() {
    return (
      <div>
        <div className="head-event-picture">
          <h1 >Create an Event</h1>
          <h4>Build memories with friends.</h4>
        </div>
        <div className="group-create">
          <form className="group-form" onSubmit={this.handleSubmit}>
            <div className="location-input">
              <img className="image-style" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
              <div className="location-input-text">
                <h6>STEP 1 OF 5</h6>
                <h2>Where is your Event going to be at?</h2>


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
             <div className="autocomplete-dropdown-container" id='auto-input'>
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
                     className="auto-suggestions"
                     onClick={() => this.handleLocation(suggestion.description)}
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
                <img className="image-style" src="http://www.myiconfinder.com/uploads/iconsets/256-256-f9573dc338fac7a4498a464840baaac6.png"/>
                <div className="location-input-text">
                  <h6>STEP 2 OF 5</h6>
                  <h2>When will your Event Happen?</h2>
                  <input type="datetime-local"
                    value={this.state.date_time}
                    onChange={this.update('date_time')}
                    />
                  <button id="button-two" onClick={()=>this.visibility('question-3', 'naming', 'button-two')}>Next</button>
                </div>
              </div>
            </div>
            <div id='naming'>
              <div id="question-3" className="location-input hidden">
                <img className="image-style" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                <div className="location-input-text">
                  <h6>STEP 3 OF 5</h6>
                  <h2>Catchy headline for your Event</h2>
                  <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder= "Example: Last Concert of the Year"
                    />

                  <h2 className="input-textarea">Describe who should join, and what your Group will do</h2>
                  <textarea value={this.state.body}
                    onChange={this.update('body')}
                    />

                </div>
              </div>
            </div>

            <div id='photo'>
              <div id="question-4" className="location-input">
                <img className="image-style-photo" src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png"/>
                <div className="location-input-text">
                  <h6>STEP 4 OF 5</h6>
                  <h2>What will your cover photo be?</h2>
                  <input type="file"
                    onChange={this.handleFile.bind(this)}
                    />

                  <button id="buttonFour" onClick={()=>this.visibility('question-5', 'terms', "buttonFour")}>Next</button>
                </div>
              </div>
            </div>

            <div id="terms">
              <div id="question-5" className="location-input hidden">
                <img className="image-style" src="https://secure.meetupstatic.com/s/img/533695931247066883484/start_v2/people.svg"/>
                <div className="location-input-text">
                  <h6>STEP 5 OF 5</h6>
                  <h2>Event Guildelines</h2>
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
            <br/>
          <br/>
            <input className="button-create" type="submit" value="Create Group" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(EventForm);
