import { useEffect } from 'react';

export function RestQuery() {
  useEffect(() => {
    fetch('/users/21')
      .then((res) => res.json())
      .then((d) => console.log(d));
  }, []);

  return null;
}
