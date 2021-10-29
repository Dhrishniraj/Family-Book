names = ["Babur", "Humayun", "Akbar", "Jahangir", "Shah Jahan", "Aurangzeb", "Muhammad Azam Shah", "Bahadur Shah", "Jahandar Shah", "Farrukhsiyar", "Rafi ud-Darajat", "Shah Jahan II", "Muhammad Shah", "Ahmad Shah Bahadur", "Alamgir II", "Shah Jahan III", "Shah Alam II", "Jahan Shah IV", "Akbar II", "Bahadur Shah Zafar"];
photos = ["Babur.jpg", "Humayun.jpg", "Akbar.jpg", "Jahangir.jpg", "Shah Jahan.jpg", "Aurangzeb.jpg", "Muhammad Azam Shah.jpg", "Bahadur Shah.jpg", "Jahandar Shah.jpg", "Farrukhsiyar.jpg", "Rafi ud-Darajat.jpg", "Shah Jahan II.jpg", "Muhammad Shah.jpg", "Ahmad Shah Bahadur.jpg", "Alamgir II.jpg", "Shah Jahan III.jpg", "Shah Alam II.jpg", "Jahan Shah IV.jpg", "Akbar II.jpg", "Bahadur Shah Zafar.jpg"];
var hashtag = 0;
function Next() {
    hashtag = hashtag + 1;
    if(hashtag > 19){
        hashtag = 0;
    }
    document.getElementById("name").innerHTML = names[hashtag];
    document.getElementById("a").href = "https://en.wikipedia.org/wiki/" + names[hashtag];
    document.getElementById("img").src = photos[hashtag];
}
