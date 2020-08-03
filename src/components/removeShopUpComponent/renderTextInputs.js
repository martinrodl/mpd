const renderTextInputs = () => {
  console.log(formValue);
  if (false && type === 'event') {
    return (
      <View style={styles.textModalInputContainer} key={formValue.id}>
        <Text style={styles.modalDescriptionTextInput}>Title</Text>
        <TextInput
          name={title}
          style={styles.modalTextInput}
          value={formValue.title}
          onChange={(e) => {
            onChangeFormValue(title, e.target.value);
          }}
        />
        <Text style={styles.modalDescriptionTextInput}>Description</Text>
        <TextInput
          name={title}
          style={styles.modalTextInput}
          value={formValue.summary}
          onChange={(e) => {
            onChangeFormValue(title, e.target.value);
          }}
        />
        <Text style={styles.modalDescriptionTextInput}>Start</Text>
        <TextInput
          name={title}
          style={styles.modalTextInput}
          value={formValue.start}
          onChange={(e) => {
            onChangeFormValue(start, e.target.value);
          }}
        />
        <Text style={styles.modalDescriptionTextInput}>End</Text>
        <TextInput
          name={end}
          style={styles.modalTextInput}
          value={formValue.end}
          onChange={(e) => {
            onChangeFormValue(end, e.target.value);
          }}
        />
      </View>
    );
  }
  if (false && type === 'contact') {
    return (
      <View style={styles.textModalInputContainer} key={formValue.id}>
        <Text style={styles.modalDescriptionTextInput}>First Name</Text>
        <TextInput
          name={firstName}
          style={styles.modalTextInput}
          value={formValue.firstName}
          onChange={(e) => {
            onChangeFormValue(firstName, e.target.value);
          }}
        />
        <Text style={styles.modalDescriptionTextInput}>Description</Text>
        <TextInput
          name={surName}
          style={styles.modalTextInput}
          value={formValue.surName}
          onChange={(e) => {
            onChangeFormValue(surName, e.target.value);
          }}
        />
        <Text style={styles.modalDescriptionTextInput}>Phone</Text>
        <TextInput
          name={phone}
          style={styles.modalTextInput}
          value={formValue.phone}
          onChange={(e) => {
            onChangeFormValue(phone, e.target.value);
          }}
        />
        <Text style={styles.modalDescriptionTextInput}>Email</Text>
        <TextInput
          name={email}
          style={styles.modalTextInput}
          value={formValue.email}
          onChange={(e) => {
            onChangeFormValue(email, e.target.value);
          }}
        />
      </View>
    );
  }
};

export default renderTextInputs;
