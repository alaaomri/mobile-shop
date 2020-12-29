const billingForm = ({
  customer: { email, phone, billingAddress },
  change,
  role,
}) => {
  const onChangeHandler = (event, name) => {
    const value = event.target.value;
    change(name, value, role);
  };

  return (
    <div className="col-6">
      <div className="woocommerce-billing-fields">
        <h3>Billing Details</h3>

        <p
          id="billing_country_field"
          className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
        >
          <label className="" htmlFor="billing_country">
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
          id="billing_first_name_field"
          className="form-row form-row-first validate-required"
        >
          <label className="" htmlFor="billing_first_name">
            First Name
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={billingAddress.firstName}
            placeholder=""
            id="billing_first_name"
            name="billing_first_name"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "firstName")}
          />
        </p>

        <p
          id="billing_last_name_field"
          className="form-row form-row-last validate-required"
        >
          <label className="" htmlFor="billing_last_name">
            Last Name
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={billingAddress.lastName}
            placeholder=""
            id="billing_last_name"
            name="billing_last_name"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "lastName")}
          />
        </p>
        <div className="clear"></div>

        <p id="billing_company_field" className="form-row form-row-wide">
          <label className="" htmlFor="billing_company">
            Company Name
          </label>
          <input
            type="text"
            value={billingAddress.companyName}
            placeholder=""
            id="billing_company"
            name="billing_company"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "companyName")}
          />
        </p>

        <p
          id="billing_address_1_field"
          className="form-row form-row-wide address-field validate-required"
        >
          <label className="" htmlFor="billing_address_1">
            Address{" "}
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={billingAddress.street}
            placeholder="Street address"
            id="billing_address_1"
            name="billing_address_1"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "street")}
          />
        </p>

        <p
          id="billing_address_2_field"
          className="form-row form-row-wide address-field"
        >
          <input
            type="text"
            value={billingAddress.apartment}
            placeholder="Apartment, suite, unit etc. (optional)"
            id="billing_address_2"
            name="billing_address_2"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "apartment")}
          />
        </p>

        <p
          id="billing_city_field"
          className="form-row form-row-wide address-field validate-required"
          data-o_class="form-row form-row-wide address-field validate-required"
        >
          <label className="" htmlFor="billing_city">
            Town / City{" "}
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={billingAddress.city}
            placeholder="Town / City"
            id="billing_city"
            name="billing_city"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "city")}
          />
        </p>

        <p
          id="billing_state_field"
          className="form-row form-row-first address-field validate-state"
          data-o_class="form-row form-row-first address-field validate-state"
        >
          <label className="" htmlFor="billing_state">
            County
          </label>
          <input
            type="text"
            id="billing_state"
            name="billing_state"
            placeholder="State / County"
            value={billingAddress.country}
            className="input-text "
            onChange={(event) => onChangeHandler(event, "country")}
          />
        </p>
        <p
          id="billing_postcode_field"
          className="form-row form-row-last address-field validate-required validate-postcode"
          data-o_class="form-row form-row-last address-field validate-required validate-postcode"
        >
          <label className="" htmlFor="billing_postcode">
            Postcode
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={billingAddress.zipCode}
            placeholder="Postcode / Zip"
            id="billing_postcode"
            name="billing_postcode"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "zipCode")}
          />
        </p>

        <div className="clear"></div>

        <p
          id="billing_email_field"
          className="form-row form-row-first validate-required validate-email"
        >
          <label className="" htmlFor="billing_email">
            Email Address
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={email}
            placeholder=""
            id="billing_email"
            name="billing_email"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "email")}
          />
        </p>

        <p
          id="billing_phone_field"
          className="form-row form-row-last validate-required validate-phone"
        >
          <label className="" htmlFor="billing_phone">
            Phone{" "}
            <abbr title="required" className="required">
              *
            </abbr>
          </label>
          <input
            required
            type="text"
            value={phone}
            placeholder=""
            id="billing_phone"
            name="billing_phone"
            className="input-text "
            onChange={(event) => onChangeHandler(event, "phone")}
          />
        </p>
        <div className="clear"></div>
      </div>
    </div>
  );
};
export default billingForm;
