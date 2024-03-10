import React, { useRef, useState } from 'react'
import { firestore } from '../components/FirebaseApp';
import { collection, addDoc } from "firebase/firestore";

function Responses() {
  const [submitPressed, setSubmitPressed] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(1);
  const [guests, setGuests] = useState([]);
  const [kidSeat, setKidSeat] = useState(0);
  const [food, setFood] = useState([{
    none: false,
    sugarFree: false,
    glutenFree: false,
    milkFree: false,
    vegetarian: false,
    vegan: false
  }]);

  const nameRef = useRef([]);
  const foodRef = useRef([]);

  async function submit_form(event) {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, "feedback"), {
        name: fullName,
        mobile: mobileNumber,
        emailAddress: email,
        numOfKidSeats: kidSeat,
        guests: guests.map((value, index) => {
          return {
            guestName: value,
            none: food[index].none,
            sugarFree: food[index].sugarFree,
            glutenFree: food[index].glutenFree,
            milkFree: food[index].milkFree,
            vegetarian: food[index].vegetarian,
            vegan: food[index].vegan
          }
        })
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setSubmitPressed(true);
  }

  function get_form_elements(num) {
    var elements = []
    for (var i = 0; i < num; i++) {
      elements.push(i)
    }
    return elements;
  }

  function updateGuestArray(ev, idx) {
    guests[idx] = ev.target.value;
    setGuests(guests);
  }

  function updateFoodArray(ev, idx, subs) {
    food[idx][subs] = ev.target.checked;
    setFood(food);
  }

  if (submitPressed) {
    return (
      <div className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='bg-green-100 h-fit border rounded-xl p-5 m-5 md:m-0 md:w-1/3'>
          <div className=''>Kedves {fullName}!</div>
          <div className='text-justify py-3'>Köszönjük, hogy kitöltötted az esküvői visszajelzés formunkat, az adatokat elmentettük,
            sok szeretettel várunk titeket a "Nagy Napon"!😊 Ha bármi kérdés / változás / probléma felmerülne, akkor keressetek minket nyugodtan!</div>
          <div>Ádám & Domi</div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='flex flex-col items-center my-5 mx-3'>
        <div className='text-2xl font-bold p-5  text-center'>
          Násznép - Részvételi Visszajelzés 📝
        </div>
        <form onSubmit={(ev) => submit_form(ev)}>
          <div className='border-gray-200 border rounded-xl p-5'>
            <div className='text-xl'>
              1. Esküvői kapcsolattartó személyes adatai
            </div>
            <div className='text-gray-500 pb-5 pt-3 text-justify'>
              Kedves Vendégünk! Esküvői kapcsolattartó vagy! Kérlek, add meg személyes adataidat. Köszönjük! 💖
            </div>
            <div>
              <div className='text-sm text-gray-600'>
                Teljes Neved
              </div>
              <input type='text' className='w-full border rounded-md p-2 my-3' maxLength={50} placeholder='Kovács Béla' required onChange={(ev) => setFullName(ev.target.value)} />
            </div>
            <div>
              <div className='text-sm text-gray-600'>
                Telefonszámod
              </div>
              <input type='text' className='w-full border rounded-md p-2 my-3' maxLength={11} pattern='[0-9]{11}' title='11 karakter (pl. 06201234567)' placeholder='06201234567' required onChange={(ev) => setMobileNumber(ev.target.value)} />
            </div>
            <div>
              <div className='text-sm text-gray-600'>
                Emailcímed
              </div>
              <input type='email' className='w-full border rounded-md p-2 my-3' maxLength={50} placeholder='pelda@gmail.com' required onChange={(ev) => setEmail(ev.target.value)} />
            </div>
          </div>

          <div className='border-gray-200 border rounded-xl p-5 mt-5'>
            <div className='text-xl'>
              2. Vendégek
            </div>
            <div className='text-gray-500 pb-5 pt-3 text-justify'>
              Kérjük add meg a résztvevők számát, akiket képviselsz.
            </div>
            <div>
              <div className='text-sm text-gray-600'>
                Résztvevők száma (Veled együtt!)
              </div>
              <select className='w-full border rounded-md p-2 my-3' onChange={ev => {
                nameRef.current.forEach(obj => { if (obj) obj.value = '' });
                foodRef.current.forEach(obj => { if (obj) obj.checked = false });

                // nameRef.current = [];
                // foodRef.current = [];
                setNumber(ev.target.value);
                setGuests(Array(ev.target.value).fill(''));
                var foodArray = [];
                for (var i = 0; i < ev.target.value; i++) {
                  foodArray[i] = {
                    none: false,
                    sugarFree: false,
                    glutenFree: false,
                    milkFree: false,
                    vegetarian: false,
                    vegan: false
                  };
                }
                setFood(foodArray)
              }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              <div className='text-sm text-gray-600 flex'>
                Ha gyerekekkel érkeztek, kérlek jelezzétek itt, hogy hány etetőszékre van szükségetek!
              </div>
              <select className='w-full border rounded-md p-2 my-3' onChange={ev => setKidSeat(ev.target.value)}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <div className='flex text-sm text-gray-600 mb-3'>
                Kérlek add meg a vendégek teljes nevét - és ha van, akkor a speciális étrendet is, amire a cateringnek figyelnie kell <br /> (magadat is sorold fel itt, illetve a 12 év alatti gyerekek esetében zárójelben az életkort is add meg!)
              </div>
              <div className='flex flex-col'>
                {
                  get_form_elements(number).map((_, index) =>
                    <div className='flex flex-col mb-3' key={"checkbox-container-" + index}>
                      <input ref={element => nameRef.current[index] = element} className='flex border rounded-md p-2 my-3' placeholder={'Vendég név ' + (index + 1)} onChange={ev => updateGuestArray(ev, index)} required />
                      <div className='flex flex-wrap justify-center text-sm gap-3'>
                        <div>
                          <input type='checkbox' ref={element => foodRef.current[index * 6] = element} onChange={ev => updateFoodArray(ev, index, 'none')} /> Nincs speciális étrend
                        </div>
                        <div>
                          <input type='checkbox' ref={element => foodRef.current[index * 6 + 1] = element} onChange={ev => updateFoodArray(ev, index, 'sugarFree')} /> Cukormentes
                        </div>
                        <div>
                          <input type='checkbox' ref={element => foodRef.current[index * 6 + 2] = element} onChange={ev => updateFoodArray(ev, index, 'glutenFree')} /> Gluténmentes
                        </div>
                        <div>
                          <input type='checkbox' ref={element => foodRef.current[index * 6 + 3] = element} onChange={ev => updateFoodArray(ev, index, 'milkFree')} /> Tejmentes
                        </div>
                        <div>
                          <input type='checkbox' ref={element => foodRef.current[index * 6 + 4] = element} onChange={ev => updateFoodArray(ev, index, 'vegetarian')} /> Vegetáriánus
                        </div>
                        <div>
                          <input type='checkbox' ref={element => foodRef.current[index * 6 + 5] = element} onChange={ev => updateFoodArray(ev, index, 'vegan')} /> Vegán
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center my-5'>
            <button type='submit' className='w-full border rounded-md p-3 border-blue-300 bg-blue-200'>Beküldés</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Responses