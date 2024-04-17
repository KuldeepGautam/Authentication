import React from "react";

const Logs = () => {
  return (
    <section>
      <div className="container-fluid" style={(overFlow = "hidden")}>
        <h2>Logs</h2>
        <table className="table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>IProtect Id</th>
              <th>Protocol Id</th>
              <th>Device Timestamp</th>
              <th>Server Timestamp</th>
              <th>IProtect Flags</th>
              <th>Auxiliary Power</th>
              <th>Secondary Power</th>
              <th>Secondary Power1</th>
              <th>Secondary Power2</th>
              <th>Secondary Power3 reserved</th>
              <th>Main Power</th>
              <th>Temperature</th>
              <th>Mains Run Hours</th>
              <th>DG Run Hours</th>
              <th>Battery Run Hours</th>
              <th>Orion</th>
              <th>Site Id</th>
              <th>Site Name</th>
              <th>Binary</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Logs;
