let api = "https://api.unsplash.com/photos/?client_id=g7Jws18X76aV8knios_ffQokSkvAgPTFbOYnqE8tcx0";
    let page = 1;
    let loading = false; 

    async function fetchData() {
      if (!loading) {
        try {
          loading = true; 
          let fetchapi = await fetch(api + "&page=" + page);
          let data = await fetchapi.json();
          console.log(data);

          let imageContainer = document.querySelector('.image');
          data.forEach(photo => {
            let url = photo.urls.regular;
            let img = document.createElement('img');
            img.setAttribute('src', url);
            img.setAttribute('alt', 'Unsplash Photo');
            imageContainer.appendChild(img);
          });

          page++;
          loading = false; 
        } catch (error) {
          console.error('Error fetching data:', error);
          loading = false; 
        }
      }
    }

    function isBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    window.addEventListener('scroll', () => {
      if (isBottom()) {
        fetchData(); 
      }
    });

    fetchData();