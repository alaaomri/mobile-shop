const shippingForm = ({ customer: { shippingAddress }, change, role }) => {
  const onChangeHandler = (event, name) => {
    const value = event.target.value;
    console.log(value);
    change(name, value, role);
  };

  return (
    <div className="col-6">
      <div className="woocommerce-shipping-fields">
        <h3 id="ship-to-different-address">
          <label
            className="checkbox"
            htmlFor="ship-to-different-address-checkbox"
          >
            Ship to a different address?
          </label>
          <input
            type="checkbox"
            value="1"
            name="ship_to_different_address"
            checked="checked"
            className="input-checkbox"
            id="ship-to-different-address-checkbox"
          />
        </h3>
        <div className="shipping_address" style={{ display: "block" }}>
          <p
            id="shipping_country_field"
            className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
          >
            <label className="" htmlFor="shipping_country">
              Civility
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <select
              className="country_to_state country_select"
              id="shipping_country"
              name="shipping_country"
              onChange={(event) => onChangeHandler(event, "civility")}
            >
              <option value="Mr">Mr</option>
              <option value="Mlle">Mlle</option>
              <option value="Mme">Mme</option>
            </select>
          </p>

          <p
            id="shipping_first_name_field"
            className="form-row form-row-first validate-required"
          >
            <label className="" htmlFor="shipping_first_name">
              First Name
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              value={shippingAddress.firstName}
              placeholder=""
              id="shipping_first_name"
              name="shipping_first_name"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "firstName")}
            />
          </p>

          <p
            id="shipping_last_name_field"
            className="form-row form-row-last validate-required"
          >
            <label className="" htmlFor="shipping_last_name">
              Last Name
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              value={shippingAddress.lastName}
              placeholder=""
              id="shipping_last_name"
              name="shipping_last_name"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "lastName")}
            />
          </p>
          <div className="clear"></div>

          <p id="shipping_company_field" className="form-row form-row-wide">
            <label className="" htmlFor="shipping_company">
              Company Name
            </label>
            <input
              type="text"
              value={shippingAddress.companyName}
              placeholder=""
              id="shipping_company"
              name="shipping_company"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "companyName")}
            />
          </p>

          <p
            id="shipping_address_1_field"
            className="form-row form-row-wide address-field validate-required"
          >
            <label className="" htmlFor="shipping_address_1">
              Address
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              value={shippingAddress.street}
              placeholder="Street address"
              id="shipping_address_1"
              name="shipping_address_1"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "street")}
            />
          </p>

          <p
            id="shipping_address_2_field"
            className="form-row form-row-wide address-field"
          >
            <input
              type="text"
              value={shippingAddress.apartment}
              placeholder="Apartment, suite, unit etc. (optional)"
              id="shipping_address_2"
              name="shipping_address_2"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "apartment")}
            />
          </p>

          <p
            id="shipping_city_field"
            className="form-row form-row-wide address-field validate-required"
            data-o_class="form-row form-row-wide address-field validate-required"
          >
            <label className="" htmlFor="shipping_city">
              Town / City{" "}
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              value={shippingAddress.city}
              placeholder="Town / City"
              id="shipping_city"
              name="shipping_city"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "city")}
            />
          </p>

          <p
            id="shipping_state_field"
            className="form-row form-row-first address-field validate-state"
            data-o_class="form-row form-row-first address-field validate-state"
          >
            <label className="" htmlFor="shipping_state">
              County
            </label>
            <input
              type="text"
              id="shipping_state"
              name="shipping_state"
              placeholder="State / County"
              value={shippingAddress.country}
              className="input-text "
              onChange={(event) => onChangeHandler(event, "country")}
            />
          </p>
          <p
            id="shipping_postcode_field"
            className="form-row form-row-last address-field validate-required validate-postcode"
            data-o_class="form-row form-row-last address-field validate-required validate-postcode"
          >
            <label className="" htmlFor="shipping_postcode">
              Postcode{" "}
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              value={shippingAddress.zipCode}
              placeholder="Postcode / Zip"
              id="shipping_postcode"
              name="shipping_postcode"
              className="input-text "
              onChange={(event) => onChangeHandler(event, "zipCode")}
            />
          </p>

          <div className="clear"></div>
        </div>

        <p id="order_comments_field" className="form-row notes">
          <label className="" htmlFor="order_comments">
            Order Notes
          </label>
          <textarea
            cols="5"
            rows="2"
            placeholder="Notes about your order, e.g. special notes for delivery."
            id="order_comments"
            className="input-text "
            name="order_comments"
            onChange={(event) => onChangeHandler(event, "note")}
          ></textarea>
        </p>
      </div>
    </div>
  );
};

export default shippingForm;
