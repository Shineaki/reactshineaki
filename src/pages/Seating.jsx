import React from 'react'
import ulesrend from '../data/ulesrend.png';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Seating() {
  return (
    <div className='flex flex-col items-center'>
      <Zoom>
        <img src={ulesrend} className='w-full' alt='' />
      </Zoom>
      <div className='p-3'>
        <div className='p-3 text-4xl text-center font-bold'>Ülésrend</div>
        <table className='table-auto border border-black'>
          <thead>
            <tr>
              <th>Név</th>
              <th>Asztal</th>
            </tr>
          </thead>
          <tbody className='p-3'>
            <tr className='border border-black'><td className='px-3'>Adrevácz Péter	</td><td className='px-3'>9</td></tr>
            <tr className='border border-black'><td className='px-3'>Annus Krisztina	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Bagossy Rebeka	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Bakó Tamás	</td><td className='px-3'>11</td></tr>
            <tr className='border border-black'><td className='px-3'>Bencsik Marianna	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Bereczki Kinga Krisztina	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Borbély Ronett	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Botyánszki Adrienn	</td><td className='px-3'>11</td></tr>
            <tr className='border border-black'><td className='px-3'>Czerpán István	</td><td className='px-3'>9</td></tr>
            <tr className='border border-black'><td className='px-3'>Czerpán Sándor	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Czerpán Sándorné	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Czerpán Zsolt	</td><td className='px-3'>9</td></tr>
            <tr className='border border-black'><td className='px-3'>Csiki Roland	</td><td className='px-3'>8</td></tr>
            <tr className='border border-black'><td className='px-3'>Csiki Tamás	</td><td className='px-3'>8</td></tr>
            <tr className='border border-black'><td className='px-3'>Csiki Tamás	</td><td className='px-3'>8</td></tr>
            <tr className='border border-black'><td className='px-3'>Csiki Tamásné	</td><td className='px-3'>8</td></tr>
            <tr className='border border-black'><td className='px-3'>Dörnyei Szabolcs	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Emesz Dávid	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Emesz Johanna	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Emesz Tibor Ákos	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Emesz Tibor Ákosné	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Emesz Zsófia	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Engel Sándor	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Engelné Eszék Erika	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Gót-Horváth Ádám	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Adrienn	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Gyula László	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Gyula Lászlóné	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Mirkó 	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Olivér 	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Szófia	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz Tamás	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Grósz-Láng Evelin	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Gyurász Marianna	</td><td className='px-3'>11</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Ádám	</td><td className='px-3'>Főasztal</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Attila	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Dávid	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Dominika	</td><td className='px-3'>Főasztal</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Frank	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Ruth	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Halmos Tamás	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Hauberger Szabina	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth Ádám	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth Bálint	</td><td className='px-3'>5</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth Lilien	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth-Istokovics Laura	</td><td className='px-3'>5</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth-Szabó Alíz 	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth-Szabó Léna 	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth-Szabó Nadin	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváth-Szabó Zsolt	</td><td className='px-3'>6</td></tr>
            <tr className='border border-black'><td className='px-3'>Horváthné Emesz Krisztina	</td><td className='px-3'>4</td></tr>
            <tr className='border border-black'><td className='px-3'>Istokovics Ferenc	</td><td className='px-3'>5</td></tr>
            <tr className='border border-black'><td className='px-3'>Istokovics Ferencné	</td><td className='px-3'>5</td></tr>
            <tr className='border border-black'><td className='px-3'>Istokovics László	</td><td className='px-3'>5</td></tr>
            <tr className='border border-black'><td className='px-3'>Istokovicsné Hegedűs Mónika	</td><td className='px-3'>5</td></tr>
            <tr className='border border-black'><td className='px-3'>Jéger Csaba	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Kaposvári Bohár Dániel	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Kelemen Tamás	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Kiss-Csiki Melinda	</td><td className='px-3'>8</td></tr>
            <tr className='border border-black'><td className='px-3'>Kovácsevics Mariann	</td><td className='px-3'>9</td></tr>
            <tr className='border border-black'><td className='px-3'>Kövesi Péter	</td><td className='px-3'>11</td></tr>
            <tr className='border border-black'><td className='px-3'>Kövesi-Menyhárt Lilla	</td><td className='px-3'>11</td></tr>
            <tr className='border border-black'><td className='px-3'>Kukai Eszter	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Lajos Levente	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Lalak Lesya	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Lombos Péter	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Lőrincz Attila	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Lőrinczi Anna	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Makra László	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Makra Szilvia	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Mester Balázs	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Mester Matilda 	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Mester Réka	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Molnár Aliz	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Molnár Gréta	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagy Anikó	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagy Gergely	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagy Lóránt </td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagy Márk 	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagy Sándor	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagyné Czerpán Ágnes	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Nagyné Csobán Lilla	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Pozsgai Ildikó	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Pozsgai Nicole	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Pozsgai Patrick	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Rőmer Viola	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Soós Adél	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Steiner Zsolt	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Szabó Tímea	</td><td className='px-3'>8</td></tr>
            <tr className='border border-black'><td className='px-3'>Szilvási Krisztián	</td><td className='px-3'>10</td></tr>
            <tr className='border border-black'><td className='px-3'>Sztancs Gréta	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Tóth Anikó	</td><td className='px-3'>7</td></tr>
            <tr className='border border-black'><td className='px-3'>Trömböczky Zselyke	</td><td className='px-3'>1</td></tr>
            <tr className='border border-black'><td className='px-3'>Váncsodi József Oberon	</td><td className='px-3'>12</td></tr>
            <tr className='border border-black'><td className='px-3'>Varga Dániel	</td><td className='px-3'>3</td></tr>
            <tr className='border border-black'><td className='px-3'>Vezekényi Zsuzsanna	</td><td className='px-3'>9</td></tr>
            <tr className='border border-black'><td className='px-3'>Weiszkopf Dorottya	</td><td className='px-3'>2</td></tr>
            <tr className='border border-black'><td className='px-3'>Weiszkopf Gábor	</td><td className='px-3'>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}



export default Seating