/**
 * @jest-environment jsdom
 */
import { IdsDataGrid, IdsDataGridFormatters } from '../../src/components/ids-data-grid/ids-data-grid';
import ResizeObserver from '../helpers/resize-observer-mock';
import IdsLookup from '../../src/components/ids-lookup';
import createFromTemplate from '../helpers/create-from-template';
import waitFor from '../helpers/wait-for';
import dataset from '../../demos/data/books.json';

describe('IdsLookup Component', () => {
  let lookup;
  const formatters = new IdsDataGridFormatters();

  const columns = () => {
    const cols = [];
    // Set up columns
    cols.push({
      id: 'selectionCheckbox',
      sortable: false,
      resizable: false,
      formatter: formatters.text,
      align: 'center',
      width: 20
    });
    cols.push({
      id: 'rowNumber',
      name: '#',
      formatter: formatters.rowNumber,
      sortable: false,
      readonly: true,
      width: 65
    });
    cols.push({
      id: 'description',
      name: 'Description',
      field: 'description',
      sortable: true,
      formatter: formatters.text
    });
    cols.push({
      id: 'ledger',
      name: 'Ledger',
      field: 'ledger',
      formatter: formatters.text
    });
    cols.push({
      id: 'price',
      name: 'Price',
      field: 'price',
      formatter: formatters.decimal,
      formatOptions: { locale: 'en-US' } // Data Values are in en-US
    });
    cols.push({
      id: 'bookCurrency',
      name: 'Currency',
      field: 'bookCurrency',
      formatter: formatters.text
    });
    return cols;
  };

  beforeEach(async () => {
    lookup = await createFromTemplate(lookup, `<ids-lookup id="lookup-1" label="Normal Lookup"></ids-lookup>`);
  });

  afterEach(async () => {
    document.body.innerHTML = '';
  });

  it('renders empty dropdown with no errors', () => {
    const errors = jest.spyOn(global.console, 'error');
    lookup.remove();
    const elem = new IdsLookup();
    document.body.appendChild(elem);
    elem.remove();
    expect(document.querySelectorAll('ids-lookup').length).toEqual(0);
    expect(errors).not.toHaveBeenCalled();
  });

  it('renders correctly', () => {
    expect(lookup.outerHTML).toMatchSnapshot();
    expect(lookup.shadowRoot.innerHTML).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    lookup = createFromTemplate(lookup, `<ids-lookup id="lookup-1" disabled="true" label="Test"></ids-lookup>`);
    expect(lookup.disabled).toBeTruthy();
    expect(lookup.readonly).toBeFalsy();
  });

  it('renders with readonly', () => {
    lookup = createFromTemplate(lookup, `<ids-lookup id="dropdown-1" readonly="true" label="Test"></ids-lookup>`);
    expect(lookup.readonly).toBeTruthy();
    expect(lookup.disabled).toBeFalsy();
  });

  it('should be able to set label', () => {
    expect(lookup.shadowRoot.querySelector('ids-input').getAttribute('label')).toEqual('Normal Lookup');
    expect(lookup.label).toEqual('Normal Lookup');
    lookup.label = 'Test New Label';
    expect(lookup.shadowRoot.querySelector('ids-input').getAttribute('label')).toEqual('Test New Label');
    expect(lookup.label).toEqual('Test New Label');
    lookup.label = '';
    expect(lookup.shadowRoot.querySelector('ids-input').getAttribute('label')).toEqual(null);
    expect(lookup.label).toEqual('');
  });

  it('should be able to set value', () => {
    lookup.value = '218901';
    expect(lookup.value).toEqual('218901');
    expect(lookup.input.value).toEqual('218901');
  });

  it('should be able to set readonly with the property', () => {
    lookup.readonly = true;
    expect(lookup.triggerField.readonly).toEqual(true);
    expect(lookup.getAttribute('readonly')).toEqual('true');

    lookup.readonly = false;
    expect(lookup.triggerField.readonly).toEqual(false);
    expect(lookup.getAttribute('readonly')).toEqual(null);

    lookup.triggerField = null;
    expect(lookup.readonly).toEqual(false);
  });

  it('should be able to set readonly with the attribute', () => {
    lookup.setAttribute('readonly', 'true');
    expect(lookup.triggerField.readonly).toEqual(true);
    expect(lookup.readonly).toEqual(true);

    lookup.setAttribute('readonly', 'false');
    expect(lookup.triggerField.readonly).toEqual(false);
    expect(lookup.readonly).toEqual(false);

    lookup.setAttribute('readonly', 'true');
    lookup.removeAttribute('readonly');
    expect(lookup.triggerField.readonly).toEqual(false);
    expect(lookup.readonly).toEqual(false);
  });

  it('should be able to set disabled with the property', () => {
    lookup.disabled = true;
    expect(lookup.triggerField.disabled).toEqual(true);
    expect(lookup.getAttribute('disabled')).toEqual('true');

    lookup.disabled = false;
    expect(lookup.triggerField.disabled).toEqual(false);
    expect(lookup.getAttribute('disabled')).toEqual(null);

    lookup.triggerField = null;
    expect(lookup.disabled).toEqual(false);
  });

  it('should be able to set disabled with the attribute', () => {
    lookup.setAttribute('disabled', 'true');
    expect(lookup.triggerField.disabled).toEqual(true);
    expect(lookup.disabled).toEqual(true);

    lookup.setAttribute('disabled', 'false');
    expect(lookup.triggerField.disabled).toEqual(false);
    expect(lookup.disabled).toEqual(false);

    lookup.setAttribute('disabled', 'true');
    lookup.removeAttribute('disabled');
    expect(lookup.triggerField.disabled).toEqual(false);
    expect(lookup.disabled).toEqual(false);
  });

  it('should be able to set tabbable with the property', () => {
    lookup.tabbable = true;
    expect(lookup.triggerField.tabbable).toEqual(true);
    expect(lookup.getAttribute('tabbable')).toEqual('true');

    lookup.tabbable = false;
    expect(lookup.triggerField.tabbable).toEqual(false);
    expect(lookup.getAttribute('tabbable')).toEqual('false');

    lookup.triggerField = null;
    lookup.tabbable = false;
    expect(lookup.tabbable).toEqual(false);
  });

  it('should be able to set tabbable with the attribute', () => {
    lookup.setAttribute('tabbable', 'true');
    expect(lookup.triggerField.tabbable).toEqual(true);
    expect(lookup.tabbable).toEqual(true);

    lookup.setAttribute('tabbable', 'false');
    expect(lookup.triggerField.tabbable).toEqual(false);
    expect(lookup.tabbable).toEqual(false);

    lookup.setAttribute('tabbable', 'true');
    lookup.removeAttribute('tabbable');
    expect(lookup.triggerField.tabbable).toEqual(false);
    expect(lookup.tabbable).toEqual(false);
  });

  it('should fire change on setting the value', () => {
    lookup.addEventListener('change', (e) => {
      expect(e.detail.value).toEqual('218902');
    });
    lookup.value = '218902';
    expect(lookup.input.value).toEqual('218902');
  });

  it('should open on click and close on the modal buttons', () => {
    expect(lookup.modal.visible).toBe(false);
    lookup.triggerButton.click();
    expect(lookup.modal.visible).toBe(true);
    lookup.modal.buttons[0].click();
    expect(lookup.modal.visible).toBe(false);
    lookup.triggerButton.click();
    expect(lookup.modal.visible).toBe(true);
    lookup.modal.buttons[1].click();
    expect(lookup.modal.visible).toBe(false);
  });

  it('should open on down arrow', () => {
    expect(lookup.modal.visible).toBe(false);
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    lookup.dispatchEvent(event);
    expect(lookup.modal.visible).toBe(true);
    lookup.modal.buttons[0].click();
    expect(lookup.modal.visible).toBe(false);
  });

  it('should not open on click if readonly / disabled', () => {
    expect(lookup.modal.visible).toBe(false);
    lookup.readonly = true;
    lookup.triggerButton.click();
    expect(lookup.modal.visible).toBe(false);
    lookup.disabled = true;
    lookup.triggerButton.click();
    expect(lookup.modal.visible).toBe(false);
  });

  it('should be able to set modal columns and dataset', () => {
    lookup.columns = columns();
    lookup.data = dataset;

    expect(lookup.dataGrid.shadowRoot.querySelectorAll('.ids-data-grid-row').length).toEqual(10);
    expect(lookup.dataGrid.columns.length).toEqual(6);
    expect(lookup.columns.length).toEqual(6);
    expect(lookup.data.length).toEqual(9);
    expect(lookup.dataGrid.shadowRoot.querySelectorAll('.ids-data-grid-cell').length).toEqual(54);
  });

  it('should be able to set datagrid settings', () => {
    lookup.columns = columns();
    lookup.data = dataset;
    lookup.dataGridSettings = {
      rowHeight: 'small'
    };

    expect(lookup.dataGrid.rowHeight).toEqual('small');
    expect(lookup.dataGridSettings).toEqual({
      rowHeight: 'small'
    });
  });

  it('renders with validation', () => {
    lookup = createFromTemplate(lookup, `<ids-lookup id="lookup-1" validate="required" validation-events="blur change" label="Test"></ids-lookup>`);
    expect(lookup.validate).toEqual('required');
    expect(lookup.validationEvents).toEqual('blur change');

    // Generate from the parent defaults
    lookup = createFromTemplate(lookup, `<ids-lookup id="lookup-1" validate="required" label="Test"></ids-lookup>`);
    lookup.validationEvents = 'blur change';
    expect(lookup.validate).toEqual('required');
    expect(lookup.validationEvents).toEqual('blur change');

    // Default Case
    lookup = createFromTemplate(lookup, `<ids-lookup id="lookup-1" validate="required" label="Test"></ids-lookup>`);
    expect(lookup.validate).toEqual('required');
    expect(lookup.validationEvents).toEqual('change blur');
  });

  it('supports validation', async () => {
    lookup = createFromTemplate(lookup, `<ids-lookup id="lookup-5" label="Dropdown with Icons" validate="true">
     </ids-lookup>`);
    await waitFor(() => expect(lookup.shadowRoot.querySelector('ids-trigger-field')).toBeTruthy());

    lookup.validate = 'required';
    lookup.validationEvents = 'blur change';
    lookup.triggerEvent('change', lookup);
    expect(lookup.getAttribute('validate')).toEqual('required');
  });

  it('can reset validation and validation-events', async () => {
    lookup.validate = 'required';
    lookup.validationEvents = 'blur change';
    lookup.validate = null;
    lookup.validationEvents = null;
    expect(lookup.getAttribute('validate')).toBeFalsy();
    expect(lookup.getAttribute('validation-events')).toBeFalsy();
  });
});
