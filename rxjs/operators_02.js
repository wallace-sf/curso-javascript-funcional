const { map, concatAll } = require("rxjs/operators");
const { ajax } = require("rxjs/ajax");
const { XMLHttpRequest } = require("xmlhttprequest");

ajax({
  url: "https://api.github.com/users/wallace-sf/repos",
  createXHR: () => new XMLHttpRequest(),
})
  .pipe(
    map((res) => JSON.parse(res.xhr.responseText)),
    concatAll(),
    map((repo) => repo.full_name)
  )
  .subscribe(console.log);
