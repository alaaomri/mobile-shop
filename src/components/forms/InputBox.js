const inputBox = (props) => {
  return (
    <p
      id="shipping_last_name_field"
      className="form-row form-row-last validate-required"
    >
      <label className="" for="shipping_last_name">
        Last Name
        <abbr title="required" className="required">
          *
        </abbr>
      </label>
      <input
        type="text"
        value=""
        placeholder=""
        id="shipping_last_name"
        name="shipping_last_name"
        className="input-text "
      />
    </p>
  );
};
export default inputBox;
