# toGather

- toGather is a single page application inspired by Meetup.  It is a full-stack application where HTML/CSS, Javascript, React/Redux is used on the front-end, Ruby on Rails on the back-end, and stored in PostgreSQL Database.


[Link to my Site](https://togathering.herokuapp.com)


## Features

- Secure frontend to backend user authentication using BCrypt
- Users can create Groups
- Users can create Events
- Users can join Groups
- Only the owner of the Group can delete the Group
- Users can find other groups and events of interest

CRUD Functionality will be done for the group where it can be created, read, updated, and deleted:

![image](https://github.com/jamestouri/toGather/blob/master/app/assets/images/groups/Screen%20Shot%202018-10-18%20at%209.26.16%20PM.png)


Google API:

Using Google Autocomplete and Places ID, users creating a group/event will be able to seek a valid location.

Here is a snippet of the Google Autocomplete:

```
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
```

### Autcomplete

![](https://github.com/jamestouri/toGather/blob/master/app/assets/images/groups/Screen%20Shot%202018-10-18%20at%209.36.27%20PM.png)

### Joining Group

Users can join groups if interested in the topic:

![](https://github.com/jamestouri/toGather/blob/master/app/assets/images/groups/Screen%20Shot%202018-10-18%20at%209.36.12%20PM.png)
