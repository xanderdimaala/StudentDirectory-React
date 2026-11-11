const FormComponent = () => {
  return (
    <>
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
    </>
  );
};

export default FormComponent;
