const submit_btn = document.getElementById('submit');

const getDetail = async (e) => {
    e.preventDefault();
    const cityName_input =  document.getElementById('cityName');
    const city =cityName_input.value;
    // console.log(city);
    const outputDiv = document.getElementById('outputDiv');
    const temp = document.getElementById('tempreture');
    const temp_status = document.getElementById('temp_status');
    // console.log(temp);
    if(city !== ''){
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab8348ee2dc0501f9cfbf2505131503e`;
            
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            outputDiv.classList.remove('data_hide');
            if(data.cod === 200){
                console.log("Data");
                temp.innerText = data.main.temp;
                if(data.weather[0].main === 'Clouds'){
                    temp_status.innerHTML = '<i class="fa fa-cloud">';
                }
                else{
                    temp_status.innerHTML = '<i class="fas fa-sun"></i>'
                }
            }
            else{
                throw 'Invalid City Name';
            }
        }catch(msg){
            outputDiv.innerText = msg;
        }
    }
    else{

    }
}

// http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab8348ee2dc0501f9cfbf2505131503e
submit_btn.addEventListener('click',getDetail);