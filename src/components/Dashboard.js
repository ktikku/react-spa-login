import React from "react";
import { AuthConsumer } from './AuthContext';

export default () => (
    <AuthConsumer>
    {({ logout }) => (

    <div style={{ display: "flex", alignItems: "center" }}>
          <button
          onClick={logout}
        >
          Logout
        </button>
    </div>
    )}
    </AuthConsumer>
);
