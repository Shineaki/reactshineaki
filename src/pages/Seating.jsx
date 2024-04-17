import React from 'react'
import ulesrend from '../data/ulesrend.png';

function Seating() {
  return (
    <div className='flex flex-col items-center'>
      <img src={ulesrend} className='w-full' alt='' />
      <div className='p-3'>
        <div className='p-3 text-2xl text-center font-bold'>Ülésrend</div>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>Név</th>
              <th>Asztal</th>
            </tr>
          </thead>
          <tbody className='p-3'>
            <tr><td>Adrevácz Péter	</td><td>9</td></tr>
            <tr><td>Annus Krisztina	</td><td>10</td></tr>
            <tr><td>Bagossy Rebeka	</td><td>12</td></tr>
            <tr><td>Bakó Tamás	</td><td>11</td></tr>
            <tr><td>Bencsik Marianna	</td><td>12</td></tr>
            <tr><td>Bereczki Kinga Krisztina	</td><td>1</td></tr>
            <tr><td>Borbély Ronett	</td><td>7</td></tr>
            <tr><td>Botyánszki Adrienn	</td><td>11</td></tr>
            <tr><td>Czerpán István	</td><td>9</td></tr>
            <tr><td>Czerpán Sándor	</td><td>2</td></tr>
            <tr><td>Czerpán Sándorné	</td><td>2</td></tr>
            <tr><td>Czerpán Zsolt	</td><td>9</td></tr>
            <tr><td>Csiki Roland	</td><td>8</td></tr>
            <tr><td>Csiki Tamás	</td><td>8</td></tr>
            <tr><td>Csiki Tamás	</td><td>8</td></tr>
            <tr><td>Csiki Tamásné	</td><td>8</td></tr>
            <tr><td>Dörnyei Szabolcs	</td><td>12</td></tr>
            <tr><td>Emesz Dávid	</td><td>4</td></tr>
            <tr><td>Emesz Johanna	</td><td>4</td></tr>
            <tr><td>Emesz Tibor Ákos	</td><td>4</td></tr>
            <tr><td>Emesz Tibor Ákosné	</td><td>4</td></tr>
            <tr><td>Emesz Zsófia	</td><td>4</td></tr>
            <tr><td>Engel Sándor	</td><td>3</td></tr>
            <tr><td>Engelné Eszék Erika	</td><td>3</td></tr>
            <tr><td>Gót-Horváth Ádám	</td><td>7</td></tr>
            <tr><td>Grósz Adrienn	</td><td>6</td></tr>
            <tr><td>Grósz Gyula László	</td><td>6</td></tr>
            <tr><td>Grósz Gyula Lászlóné	</td><td>6</td></tr>
            <tr><td>Grósz Mirkó 	</td><td>6</td></tr>
            <tr><td>Grósz Olivér 	</td><td>6</td></tr>
            <tr><td>Grósz Szófia	</td><td>6</td></tr>
            <tr><td>Grósz Tamás	</td><td>6</td></tr>
            <tr><td>Grósz-Láng Evelin	</td><td>6</td></tr>
            <tr><td>Gyurász Marianna	</td><td>11</td></tr>
            <tr><td>Halmos Ádám	</td><td>Főasztal</td></tr>
            <tr><td>Halmos Attila	</td><td>1</td></tr>
            <tr><td>Halmos Dávid	</td><td>1</td></tr>
            <tr><td>Halmos Dominika	</td><td>Főasztal</td></tr>
            <tr><td>Halmos Frank	</td><td>1</td></tr>
            <tr><td>Halmos Ruth	</td><td>1</td></tr>
            <tr><td>Halmos Tamás	</td><td>1</td></tr>
            <tr><td>Hauberger Szabina	</td><td>12</td></tr>
            <tr><td>Horváth Ádám	</td><td>12</td></tr>
            <tr><td>Horváth Bálint	</td><td>5</td></tr>
            <tr><td>Horváth Lilien	</td><td>4</td></tr>
            <tr><td>Horváth-Istokovics Laura	</td><td>5</td></tr>
            <tr><td>Horváth-Szabó Alíz 	</td><td>6</td></tr>
            <tr><td>Horváth-Szabó Léna 	</td><td>6</td></tr>
            <tr><td>Horváth-Szabó Nadin	</td><td>6</td></tr>
            <tr><td>Horváth-Szabó Zsolt	</td><td>6</td></tr>
            <tr><td>Horváthné Emesz Krisztina	</td><td>4</td></tr>
            <tr><td>Istokovics Ferenc	</td><td>5</td></tr>
            <tr><td>Istokovics Ferencné	</td><td>5</td></tr>
            <tr><td>Istokovics László	</td><td>5</td></tr>
            <tr><td>Istokovicsné Hegedűs Mónika	</td><td>5</td></tr>
            <tr><td>Jéger Csaba	</td><td>10</td></tr>
            <tr><td>Kaposvári Bohár Dániel	</td><td>12</td></tr>
            <tr><td>Kelemen Tamás	</td><td>10</td></tr>
            <tr><td>Kiss-Csiki Melinda	</td><td>8</td></tr>
            <tr><td>Kovácsevics Mariann	</td><td>9</td></tr>
            <tr><td>Kövesi Péter	</td><td>11</td></tr>
            <tr><td>Kövesi-Menyhárt Lilla	</td><td>11</td></tr>
            <tr><td>Kukai Eszter	</td><td>2</td></tr>
            <tr><td>Lajos Levente	</td><td>10</td></tr>
            <tr><td>Lalak Lesya	</td><td>10</td></tr>
            <tr><td>Lombos Péter	</td><td>7</td></tr>
            <tr><td>Lőrincz Attila	</td><td>12</td></tr>
            <tr><td>Lőrinczi Anna	</td><td>10</td></tr>
            <tr><td>Makra László	</td><td>3</td></tr>
            <tr><td>Makra Szilvia	</td><td>3</td></tr>
            <tr><td>Mester Balázs	</td><td>3</td></tr>
            <tr><td>Mester Matilda 	</td><td>3</td></tr>
            <tr><td>Mester Réka	</td><td>3</td></tr>
            <tr><td>Molnár Aliz	</td><td>3</td></tr>
            <tr><td>Molnár Gréta	</td><td>7</td></tr>
            <tr><td>Nagy Anikó	</td><td>3</td></tr>
            <tr><td>Nagy Gergely	</td><td>2</td></tr>
            <tr><td>Nagy Lóránt </td><td>2</td></tr>
            <tr><td>Nagy Márk 	</td><td>2</td></tr>
            <tr><td>Nagy Sándor	</td><td>2</td></tr>
            <tr><td>Nagyné Czerpán Ágnes	</td><td>2</td></tr>
            <tr><td>Nagyné Csobán Lilla	</td><td>2</td></tr>
            <tr><td>Pozsgai Ildikó	</td><td>1</td></tr>
            <tr><td>Pozsgai Nicole	</td><td>1</td></tr>
            <tr><td>Pozsgai Patrick	</td><td>1</td></tr>
            <tr><td>Rőmer Viola	</td><td>12</td></tr>
            <tr><td>Soós Adél	</td><td>1</td></tr>
            <tr><td>Steiner Zsolt	</td><td>7</td></tr>
            <tr><td>Szabó Tímea	</td><td>8</td></tr>
            <tr><td>Szilvási Krisztián	</td><td>10</td></tr>
            <tr><td>Sztancs Gréta	</td><td>7</td></tr>
            <tr><td>Tóth Anikó	</td><td>7</td></tr>
            <tr><td>Trömböczky Zselyke	</td><td>1</td></tr>
            <tr><td>Váncsodi József Oberon	</td><td>12</td></tr>
            <tr><td>Varga Dániel	</td><td>3</td></tr>
            <tr><td>Vezekényi Zsuzsanna	</td><td>9</td></tr>
            <tr><td>Weiszkopf Dorottya	</td><td>2</td></tr>
            <tr><td>Weiszkopf Gábor	</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}



export default Seating