/* eslint-disable eqeqeq */
import { Component } from 'react';
import { getCookie, setCookie } from './Helper';
import { connect } from 'react-redux';

let cat = getCookie('categories');
let gen = getCookie('genres');
let gtp = getCookie('game_types');
let jcat;
let jgen;
let jgtp;

function transformArray(arr) {
  if (cat || gen) {
    return arr?.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  } else {
    return 'none';
  }
}

var checkCookie = () => {
  var lastCookie = document.cookie;
  // console.log('Listening for cookie changes...');

  return () => {
    var currentCookie = document.cookie;

    if (currentCookie !== lastCookie) {
      cat = getCookie('categories');
      gen = getCookie('genres');
      gtp = getCookie('game_types');
      console.log('Cookie has changed.');
      lastCookie = currentCookie;
    }
  };
};

jcat = cat && JSON.parse(cat);
jgen = gen && JSON.parse(gen);
jgtp = gtp && JSON.parse(gtp);

export class Categories extends Component {
  constructor(props) {
    super(props);

    if (props) {
      jcat = props;
    }
    this.init = checkCookie();
    setInterval(this.init, 100);
  }

  mid = jcat ? transformArray(jcat) : '';
  max = jcat;

  filter = (id) => {
    if (!this.mid) {
      // Handle the case when categories.mid is undefined or null
      return [];
    }

    const label = this?.mid?.find((c) => c.value === id);
    return label ?? []; // This will be the matching object or undefined
  };

  reset = () => {
    setCookie('categories', '', 0);
  };
}

export class Genres extends Component {
  constructor(props) {
    super(props);

    if (props) {
      jgen = props;
    }
    // Initialize the interval to check for cookie changes
    this.init = checkCookie();
    setInterval(this.init, 100);
  }

  mid = jgen ? transformArray(jgen) : '';
  max = jgen ?? [];

  listen = () => {
    // Do something when a change in cookies is detected
    // console.log('Listening for cookie changes...');
  };

  filter = (id) => {
    if (!this.mid) {
      // Handle the case when categories.mid is undefined or null
      return [];
    }

    // Access Redux state
    const label = this?.mid?.find((c) => c.value === id);
    return label ?? []; // This will be the matching object or undefined
  };

  reset = () => {
    setCookie('genres', '', 0);
  };
}

export class GameTypes extends Component {
  constructor(props) {
    super(props);

    // if (props) {
    //   jgtp = props;
    //   console.log(props, 'this');
    // }
    // Initialize the interval to check for cookie changes
    this.init = checkCookie();
    setInterval(this.init, 100);
  }

  mid = jgtp ? transformArray(jgtp) : '';
  max = jgtp;

  filter = (id) => {
    if (!this.mid) {
      // Handle the case when categories.mid is undefined or null
      return [];
    }

    const label = this?.mid?.find((c) => c.value === id);
    return label ?? []; // This will be the matching object or undefined
  };

  reset = () => {
    setCookie('game_types', '', 0);
  };
}

function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// Import necessary dependencies

// Define mapStateToProps functions for each component
const categoriesMapStateToProps = (state) => ({
  cat: getCookie('categories') && JSON.parse(getCookie('categories')),
});

const genresMapStateToProps = (state) => ({
  gen: getCookie('genres') && JSON.parse(getCookie('genres')),
});

const gameTypesMapStateToProps = (state) => ({
  gtp: getCookie('game_types') && JSON.parse(getCookie('game_types')),
});

// Connect each component to Redux state using connect
const ConnectedCategories = connect(categoriesMapStateToProps)(Categories);
const ConnectedGenres = connect(genresMapStateToProps)(Genres);
const ConnectedGameTypes = connect(gameTypesMapStateToProps)(GameTypes);

export { ConnectedCategories, ConnectedGenres, ConnectedGameTypes };
