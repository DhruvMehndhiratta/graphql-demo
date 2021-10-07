import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery, from, HttpLink } from '@apollo/client';
import './App.css';
import styles from './AppStyle.module.css';

const enchancedFetch = (url, init) => {
  return fetch(url, {
      ...init,
      headers: {
          ...init.headers,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
  }).then(response => response)
}

const httpLink = new HttpLink({
  uri: 'https://graphql.capstage.net/api',
  credentials: 'omit',
  fetchOptions: {
    mode: 'no-cors',
  },
  fetch: enchancedFetch,
})


let client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: 'http://localhost:4000/api',
});

let LIST_COUNTRIES;

LIST_COUNTRIES = gql`
  {
    capCategory(htmlName: "accounting-software") {
      id
      longName
      upcCategoryId
    }
  }
`;

// LIST_COUNTRIES = gql`
//   {
//     country(code: "BR") {
//       name
//       native
//       capital
//       emoji
//       currency
//       languages {
//         code
//         name
//       }
//     }
//   }
// `;


const App = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, {
    client,
    variables: {
      htmlName: 'accounting-software'
    }
   });
  console.log(data, 'data', loading, error)
  return (
    <div>
      <h1 className="error"> error </h1>
      <h1 className={styles.success}> success </h1>
    </div>
  )
}

export default App;