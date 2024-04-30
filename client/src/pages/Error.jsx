import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error Occured";
  let message = "Somthing went wrong!";

  if (error.status === 404) {
    message = error.data.message;
  }
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default ErrorPage;

// hello dear, i have a client which needs a old car reselling web app. write a information gathering report to the client. here i have to show them these are the following features which needs to build a complete old car reselling web app

// list of features:
// const features = {
//   AdminDashboard: {
//     postingCar:
//       "uploading a new Cars to the frontend with fully functionable way.",
//     potingCars: "uploading multiple new Cars to the frontend.",
//     deletingSoldedCars: "Deleting Solded Cars from the frontend",
//     editingExistingCars: "editing the currently live cars on the website.",
//     getAllCars:
//       "Getting All Cars from the database and showing to the admin dashboard",
//     roleBasedAuthentication:
//       "Multiple user access to the Dashboard with given role based-permission",
//     ordersSection:
//       "orders from currently have inProcess and NotInProcess and Processed",
//     transactionSystem: "showing all Transaction History",
//     getALlUser: "Showing all users who is registered to your website.",
//     deleteUser: "delete Specific User to the web app",
//   },
//   Backend: {
//     authenticationSystem:
//       "Building a Authentication System, so the users to be registered on website for future",
//     EmailingSystem:
//       "Building an Email system where users can send email direct to the office of the company for direct communication",
//     AddingCar: "Adding new car the database and showing on the",
//     buildingLikedCarsSystem: "Building a fully functional liked cars System",
//     BuildingFilter: "building Filter System in backend",
//   },
//   frontend: {
//     DesignFrontend: "FrontEnd-Designing",
//     authenticationSystem:
//       "Authentication System for user Registration or Login",
//     fetchingAllCars: "Fetching All Cars on the Website",
//     buildingLayout: "Building a websites layout design",
//     BuildingFilter: "building Filter System in Frontend",
//     paymentGateway: "integrating Payment gateway for seamless transaction"
//   },
// };
