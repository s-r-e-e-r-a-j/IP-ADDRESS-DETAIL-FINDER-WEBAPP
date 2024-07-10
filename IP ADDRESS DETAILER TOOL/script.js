const input=document.querySelector("#input")
	const btn=document.querySelector("#btn")
	const output=document.querySelector("#output")

	  btn.addEventListener("click",async()=>{
           try{
	  	   let api=`http://ip-api.com/json/${input.value}`

	  	   let response=await fetch(api)
	  	   let data=await response.json()
	  	   console.log(data)
	  	   output.innerText=`Ip Address Details:-\n ${data.as}\n country:${data.country}\ncountrycode:${data.countryCode}\n city:${data.city}\nlongitude:${data.lon}\nlatitude:${data.lat}\n region ${data.region}\n regionname :${data.regionName}\n ISP:${data.isp}`

	  	}catch(error){
	  		output.innerText=error
	  	}

	  })
