import React from 'react';
import Webimage from '../assets/Webimage.png';

const GetStarted = () => {
  return (
    <>
    <div>
      {/* New Div */}
      <div style={{ ...newDivStyle, backgroundSize: 'cover', backgroundPosition: 'center', height: '532px', marginBottom: '2rem', display:'flex',alignItems: 'center' }}>
        <div style={{ ...textContainer, textAlign: '', flex: '1', padding: '2rem 2rem 1rem' }}> {/* Adjusted padding */}
          <h1 style={{ fontSize: '28px', fontWeight: 'bold' }} className="mx-1 my-5 font-serif text-[27px]">Manage your projects more easily</h1>
          <p>Task creation encompasses collaborative capabilities for turning ideas into actions (tasks). This includes activities involved in defining the task and encompasses the collaboration needed in the planning process. Worksphere can help individuals achieve goals or enable groups of individuals to collaborate and share knowledge for the accomplishment of collective goals</p>
          
          {/* Form for email input */}
          <form style={{ display: 'flex', alignItems: 'center' }}>
            <input type="email" placeholder="Enter your email" style={{ padding: '0.5rem', marginRight: '1rem', width: '20rem', border: '1px solid #7558E6' }} />
            <button type="submit" className="bg-[#000000] px-3 py-1.5 squared text-white" style={{ ...buttonStyle, textAlign: 'center', marginLeft: '0.5rem' }}><a href='/Register' path="/pages/Register">Learn more →</a></button>
          </form>
          
        </div>
        <div style={{ ...imageStyle, flex: '1', height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <img src={Webimage} alt="laptop image"  />
        </div>
      </div>

      {/* First Div */}
      <div style={{ ...gradientBlock,marginTop:'2rem',marginBottom: '2rem' ,background: ''}}> {/* Add marginBottom here */}
        {/* Content goes here */}
        <div style={contentContainer}>
          <div style={textContainer}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold' }} className="mx-1 my-5 font-serif text-[27px]">Add and Delete tasks smoothly</h1>
            <p>We have the ability to both add and delete tasks, facilitating seamless tracking of tasks to be completed within specified timeframes. Users can then access a list of tasks, displayed in an organized manner, with each task featuring an associated delete button for streamlined task management. This functionality enhances user productivity and project efficiency, providing a user-friendly experience for task management within the application.</p>
          </div>
          <button className="bg-[#000000] px-3 py-2 squared text-white" style={{ ...buttonStyle, alignSelf: 'flex-start', paddingLeft: '2rem', marginBottom: '10rem', marginTop: '-4rem',textAlign: 'center' }}>Explore now →</button>
        </div>
        <img src={Webimage} alt="laptop image" style={{ ...imageStyle, marginLeft: '5vw', paddingRight: '4rem', paddingTop: '4rem' }} /> {/* Add paddingTop here */}
      </div>

      {/* Second Div (Opposite of the First Div) */}
      <div style={{ ...gradientBlock, flexDirection: 'row-reverse', paddingTop: '2rem',background:'', }}> {/* Add paddingTop here */}
        {/* Content goes here */}
        <div style={contentContainer}>
          <div style={textContainer}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold' }} className="mx-1 my-5 font-serif text-[27px]">Set Priorities to your tasks easily</h1>
            <p>See how projects contribute to top-line objectives so your team always knows what to work on first. By tracking all of your tasks in one place, never lose sight of what’s most important for the project—and for your day-to-day.</p>
          </div>
          <button className="bg-[#000000] px-3 py-2 squared text-white" style={{ ...buttonStyle, alignSelf: 'flex-end', paddingRight: '2rem', marginBottom: '12rem', marginTop: '-4rem', textAlign: 'center',fontSize: '14px'}}>Explore now →</button>
        </div>
        <img src={Webimage} alt="laptop image" style={{ ...imageStyle, paddingLeft: '4rem', paddingRight: '2rem', paddingTop: '2rem' }} /> {/* Add paddingTop here */}
      </div>
    </div>
    </>
  );
}

const newDivStyle = {
  background: '',
  padding: '2rem',
  marginBottom: '2rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px', // Increase the height
}

const gradientBlock = {
  height: '79vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'row', // Stack children horizontally
}

const contentContainer = {
  display: 'flex',
  flexDirection: 'column', // Stack children vertically
  justifyContent: 'space-between', // Align items evenly along the main axis
  flex: '1', // Grow to fill available space
}

const textContainer = {
  padding: '10vh 2vw 8vh', // Adjusted padding
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const imageStyle = {
  width: 'auto', // Maintain aspect ratio
  height: 'auto', // Maintain aspect ratio
  maxHeight: '60vh', // Limit maximum height
  maxWidth: '40vw', // Limit maximum width
}

const buttonStyle = {
  margin: '2rem 5rem', // Add margin top and bottom for spacing
  padding: '0.5rem 1rem', // Add padding for better sizing
  width:'12vw',
  height:'auto',
  borderRadius: '20px'
}

export default GetStarted;
