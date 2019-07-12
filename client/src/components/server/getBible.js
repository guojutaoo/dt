import key from "../key.json"


export function getBibleVersion(){
return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener(`readystatechange`, function() {
      if (this.readyState === this.DONE) {
        const {data} = JSON.parse(this.responseText);
        const versions = data.map( (data) => {
          return {
            name: data.name,
            id: data.id,
            abbreviation: data.abbreviation,
            description: data.description,
            language: data.language.name
          };
        });
        resolve(versions);
      }
    });
    xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles`);
    xhr.setRequestHeader(`api-key`, key['API_KEY']);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

export function getBooks(bibleVersionID) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener(`readystatechange`, function() {
            if (this.readyState === this.DONE) {
              const {data} = JSON.parse(this.responseText);
              const books = data.map( ({name, id}) => { return {name, id}; } )
              resolve(books);
            }
          });
          xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books`);
          xhr.setRequestHeader(`api-key`, key['API_KEY']);
          xhr.onerror = () => reject(xhr.statusText);
          xhr.send();
        });
      }

export function getChapters(bibleVersionID, bibleBookID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.addEventListener(`readystatechange`, function() {
        if (this.readyState === this.DONE) {
          const {data} = JSON.parse(this.responseText);
          const chapters = data.map( ({number, id}) => { return {number, id}; } );
          resolve(chapters);
        }
      });
      xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bibleBookID}/chapters`);
      xhr.setRequestHeader(`api-key`, key['API_KEY']);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }

export function getSections(bibleVersionID, bibleBookID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
  
      xhr.addEventListener(`readystatechange`, function() {
        if (this.readyState === this.DONE) {
          const {data} = JSON.parse(this.responseText);
          console.log('data', data)
          const sections = data ? data.map( ({title, id}) => { return {title, id}; } ) : null;
  
          resolve(sections);
        }
      });
  
      xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bibleBookID}/sections`);
      xhr.setRequestHeader(`api-key`, key['API_KEY']);
  
      xhr.onerror = () => reject(xhr.statusText);
  
      xhr.send();
    });
  }

  export function getVerses(bibleVersionID, bibleChapterID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.addEventListener(`readystatechange`, function() {
        if (this.readyState === this.DONE) {
          const {data} = JSON.parse(this.responseText);
          const verses = data.map( ({id}) => { return {id};} );
          resolve(verses);
        }
      });
      xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${bibleChapterID}/verses`);
      xhr.setRequestHeader(`api-key`, key['API_KEY']);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }

  export function getChapterText(bibleVersionID, bibleChapterID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.addEventListener(`readystatechange`, function() {
        if (this.readyState === this.DONE) {
          const {data, meta} = JSON.parse(this.responseText);
          console.log(data, meta)
  
        //   _BAPI.t(meta.fumsId);
          resolve(data.content);
        }
      });
      xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${bibleChapterID}`);
      xhr.setRequestHeader(`api-key`, key['API_KEY']);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }