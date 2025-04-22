document.addEventListener("DOMContentLoaded", () =>{
    const input = document.querySelectorAll("input");
    const select = document.querySelectorAll("select");
    const button = document.querySelectorAll("button");

    const calculatebtn = button[0];
    const clearbtn = button[1];

    calculatebtn.addEventListener("click", () =>{
        const Age = parseInt(input[0].value);
        const Height = parseFloat(input[1].value);
        const Weight = parseFloat(input[2].value);
        const Gender = parseInt(select[0].value);
        const activity_level = parseInt(select[1].value);

        if(isNaN(Age) || isNaN(Height) || isNaN(Weight)){
            alert("please fill all fields correctly");
            return;
        } else{
            let BMR;
            if(Gender === 0){
                BMR = 10 * Weight + 6.25 * Height - 5 * Age - 161;
            } else{
                BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
            }
            const activity_multiplier = {
                "0" : 1,
                "1" : 1.2,
                "2" : 1.375,
                "3" : 1.465,
                "4" : 1.55,
                "5" : 1.725,
                "6" : 1.9
            };

            const calories = Math.round(BMR * activity_multiplier[activity_level]);
            document.getElementById("output-content").innerText = calories +" "+ "Kcal";
        }
    });
    clearbtn.addEventListener("click", () => {
        input.forEach(el => el.value = "");
        select.forEach(el => el.selectedIndex = 0);
    })
    })



