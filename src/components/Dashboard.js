import React from "react";
import { AuthConsumer } from './AuthContext';

export default (props) => (
    <AuthConsumer>
    {({ logout }) => (
    <div style={{ flex: 1, backgroundColor: '#2fcc70', width: '100%', height: '100%', paddingBottom: 24, paddingTop: 12 }}>
       <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <label>Name:</label>
       <p>"Karan Tikku"</p>
       </div>
       <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <label>usename:</label>
       <p>"ktikku"</p>
       </div>
       <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <label>Location:</label>
       <p>"Bangalore"</p>
       </div>
       <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <label style={{ marginRight: 12 }}>Photo:</label>
       <button onClick={logout}>Logout</button>
       </div>
    </div>
    )}
    </AuthConsumer>
);
