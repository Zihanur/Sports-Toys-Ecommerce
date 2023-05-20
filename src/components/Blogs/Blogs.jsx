import { useState } from "react";

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="mx-6">
      <h1 className=" my-4 text-center text-3xl font-semibold">Blog Content</h1>
      <div className="accordion">
        <div className="accordion-item">
          <button
            className="accordion-header border rounded border-slate-500 w-full text-left text-xl font-semibold ps-4 py-2"
            onClick={() => toggleAccordion(0)}
          >
            Access token vs refresh token. How do they work and where should we
            store them on the client-side?
          </button>
          {activeIndex === 0 && (
            <div className="accordion-content">
              <div className="p-4">
              <h1 className="font-bold">Access Token:</h1>
              <p>
                Access token is a user access protected in the server. Server
                provide it and user authentication. It is typically a string of
                characters that grants specific permissions and has an
                expiration time. Access tokens are usually included in API
                requests as an authorization header or in the query parameters.
              </p>
              <h1 className="font-bold">Refresh Token:</h1>
              <p>
                A refresh token is a long-lived credential that is used to
                obtain a new access token when the current access token expires.
                Refresh tokens are typically issued along with an access token
                during the authentication process. They are securely stored on
                the client-side sent to the server when requesting a new access
                token.
              </p>
              <h1 className="font-bold">Work:</h1>
              <div>
                <ul>
                  <li>User send request for Token.</li>
                  <li>Database send token and save this user information.</li>
                  <li>
                    Then user request for api data,server varification this
                    user.
                  </li>
                  <li>
                    When token is expaire, refresh token recovary this access
                    token
                  </li>
                </ul>
              </div>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button
            className="accordion-header border rounded border-slate-500 w-full text-left text-xl font-semibold ps-4 py-2"
            onClick={() => toggleAccordion(1)}
          >
            SQL vs NoSQL database?
          </button>
          {activeIndex === 1 && (
            <div className="accordion-content">
              <div className="p-4">
                <h1 className="font-bold">SQL Databases:</h1>
                <p>SQL is a Structured Query Language.SQL database structure of the data, including tables, columns, and relationships between them. Data is stored in rows and columns.</p>
                <h1 className="font-bold">NoSQL Databases:</h1>
                <p>NoSQL databases have Flexibility, Scalability and Performance is good. It stored Array, Object. There are different types of NoSQL databases, including key-value stores, document databases, columnar databases, and graph databases. Each type has its own strengths and is optimized for specific use cases. Example: MongoDB.</p>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button
            className="accordion-header border rounded border-slate-500 w-full text-left text-xl font-semibold ps-4 py-2"
            onClick={() => toggleAccordion(2)}
          >
            Express JS and Nest JS?
          </button>
          {activeIndex === 2 && (
            <div className="accordion-content">
              <div className="p-4">
                <h1 className="font-bold">Express JS:</h1>
                <p>Express JS build Web application and APIs. It Simplicity and Flexibility very good. It provides a low-level abstraction that gives developers control over how they handle requests and responses. Express.js handling middleware functions for  requests and responses.</p>
                <h1 className="font-bold">Nest JS:</h1>
                <p>Nest.js is an opinionated framework that encourages a modular and structured approach to building applications. Nest js is built with TypeScript and leverages its features. Nest js uses decorators and metadata to define routes, request or response validation, middleware.</p>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item mb-4">
          <button
            className="accordion-header border rounded border-slate-500 w-full text-left text-xl font-semibold ps-4 py-2"
            onClick={() => toggleAccordion(3)}
          >
            What is MongoDB and how does it work?
          </button>
          {activeIndex === 3 && (
            <div className="accordion-content">
              <div className="p-4">
                <h1 className="font-bold">MongoDB:</h1>
                <p>MongoDB open source and popular Database Mangement System. It stores data in JSON data. MongoDB is flexible that store documents with different fields and structures. MongoDB is high performance and low latency</p>
                <h1 className="font-bold">MongoDB work:</h1>
                <p>MongoDB data is organized into collections, Each collection contains multiple documents, which are individual records or data entries. It stored in JSON formate data. MongoDB supports the basic CRUD operations: Create, Read, Update, and Delete.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
