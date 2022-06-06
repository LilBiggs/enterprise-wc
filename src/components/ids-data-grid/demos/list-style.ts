import '../ids-data-grid';
import '../../ids-container/ids-container';
import companyJSON from '../../../assets/data/companies.json';

// Example for populating the DataGrid
const dataGrid: any = document.querySelector('#data-grid-list');
const container: any = document.querySelector('ids-container');

(async function init() {
  // Set Locale and wait for it to load
  await container.setLocale('en-US');

  // Do an ajax request
  const url: any = companyJSON;
  const columns = [];

  // Set up columns
  columns.push({
    id: 'selectionCheckbox',
    name: 'selection',
    sortable: false,
    resizable: false,
    formatter: dataGrid.formatters.selectionCheckbox,
    align: 'center'
  });
  columns.push({
    id: 'rowNumber',
    name: '#',
    formatter: dataGrid.formatters.rowNumber,
    sortable: false,
    readonly: true,
    width: 65
  });
  columns.push({
    id: 'companyName',
    name: 'Company Name',
    field: 'companyName',
    formatter: dataGrid.formatters.hyperlink,
    href: '#'
  });
  columns.push({
    id: 'phone',
    name: 'Phone',
    field: 'phone',
    sortable: true,
    formatter: dataGrid.formatters.text
  });
  columns.push({
    id: 'location',
    name: 'Location',
    field: 'location',
    sortable: true,
    formatter: dataGrid.formatters.text
  });
  columns.push({
    id: 'customerSince',
    name: 'Since',
    field: 'customerSince',
    sortable: true,
    formatter: dataGrid.formatters.date
  });

  dataGrid.columns = columns;

  const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    dataGrid.data = data;
  };

  setData();
}());
