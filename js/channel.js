const loadVideos = async () => {
    let url = 'https://openapi.programming-hero.com/api/videos/category/1000';
    const res = await fetch(url);
    const data = await res.json();
    const videos = data.data;
    displayVideos(videos);
}


const videosContainer = document.getElementById('card-container')
const displayVideos = videos => {
    videos.forEach(video => {
        console.log(video)
        const videoCard = document.createElement('div')
        videoCard.classList = `card w-80 bg-white`
        videoCard.innerHTML = `
                 <figure class="rounded" ><img src="${video.thumbnail}" alt="Shoes" class="mt-6 w-80 h-40"/>
                    </figure>
                    <div class="mt-6">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-full overflow-hidden">
                                <img src="${video.authors[0].profile_picture}"
                                    class="w-full h-full object-cover" alt="Circular Image">
                            </div>  
                            <div>
                                <h2 class="card-title font-bold text-lg">${video.title}</h2>
                                <div class="flex gap-2 mt-2">
                                    <p class="text-gray-600">${video.authors[0].profile_name}</p>
                                    <div class="w-6 h-6 rounded-full overflow-hidden">
                                        <img src="images/verify.png" alt="">
                                    </div>
                                </div>
                                <p class="text-gray-600">${video.others.views} views</p>
                            </div>
                        </div>
                    </div>
        `
        videosContainer.appendChild(videoCard)
    })
}

loadVideos()

document.getElementById('allButton').addEventListener('click', function(){console.log('button 1 ')});
document.getElementById('musicButton').addEventListener('click', function(){console.log('button 2')} );
document.getElementById('comedyButton').addEventListener('click', function(){console.log('button 3')});
document.getElementById('drawingButton').addEventListener('click', function(){console.log('button 4')}  );


