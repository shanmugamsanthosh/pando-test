



// export default function App() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Sidebar />
//       <Box sx={{ flexGrow: 1 }}>
//         <Header />
//         <Toolbar /> {/* Spacer for fixed AppBar */}
//         <ContentHeader />
//         <PlanningGroup />
//         <DataTable />
//       </Box>
//     </Box>
//   );
// }



import "./App.css";
import React from "react";
// import Header from "./components/header/header";
// import Layout from "./components/sidebar/sidebar";
import Dashboard from "./components/header/appbar";

function App() {
  return (
    <>
      <div className="App">
        {/* <Layout> */}
          <Dashboard />
        {/* </Layout> */}
      </div>
    </>
  );
}

export default App;

