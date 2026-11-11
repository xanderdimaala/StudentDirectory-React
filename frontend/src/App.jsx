import "./style.css";
import HeaderContainer from "./components/HeaderContainer";
import FormContainer from "./components/FormContainer";
import ListContainer from "./components/ListContainer";
function App() {
  return (
    <>
      <HeaderContainer />
      <FormContainer />
      <ListContainer />

      <section id="formContainer">
        <form id="studentForm">
          <div class="input-field">
            <label for="Program">Student Name</label>
            <input type="type" name="Program" id="Program"></input>
          </div>
          <div class="input-field">
            <label for="Program">Student Program</label>
            <input type="type" name="Program" id="Program"></input>
          </div>
          <div>
            <button>Add Student</button>
          </div>
        </form>
      </section>

      <section id="listContainer"></section>
    </>
  );
}

export default App;
