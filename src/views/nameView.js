import NameDisplay from './../components/nameDisplay'
import NameInput from './../components/nameInput'

export default function Name({greeting}) {
  return (
    <div>  
      <NameDisplay greeting={greeting}/>
      <NameInput/>
    </div>);
}
