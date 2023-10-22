import { getCookie, setCookie } from './Helper';

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

jcat = cat && JSON.parse(cat);
jgen = gen && JSON.parse(gen);
jgtp = gtp && JSON.parse(gtp);

export class Categories {
  mid = jcat ? transformArray(jcat) : '';

  max = jcat;

  filter = (id) => {
    if (!this.mid) {
      // Handle the case when categories.mid is undefined or null
      return [];
    }

    const label = this.mid.find((c) => c.value === id);
    return label ?? []; // This will be the matching object or undefined
  };
  reset = () => {
    setCookie('categories', '', 0);
  };
}

export class Genres {
  mid = jgen ? transformArray(jgen) : '';
  max = jgen ?? [];

  filter = (id) => {
    if (!this.mid) {
      // Handle the case when categories.mid is undefined or null
      return [];
    }

    const label = this.mid.find((c) => c.value === id);
    return label ?? []; // This will be the matching object or undefined
  };
  reset = () => {
    setCookie('genres', '', 0);
  };
}

export class GameTypes {
  mid = jgtp ? transformArray(jgtp) : '';
  max = jgtp;

  filter = (id) => {
    if (!this.mid) {
      // Handle the case when categories.mid is undefined or null
      return [];
    }

    const label = this.mid.find((c) => c.value === id);
    return label ?? []; // This will be the matching object or undefined
  };

  reset = () => {
    setCookie('game_types', '', 0);
  };
}
