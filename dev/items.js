
const items = [
  {
    type: 'button',
    id: 'roleA',
    displayName: 'aaaaaaaa',
  },
  {
    type: 'button',
    id: 'roleB',
    displayName: 'b',
  },
  {
    type: 'checklist',
    id: 'checkList1',
    displayName: 'personalization',
    items: [
      {id: 'cardA', displayName: 'card A' ,isSelected: false},
      {id: 'cardB', displayName: 'card B' ,isSelected: false},
      {id: 'cardC', displayName: 'card C' ,isSelected: false},
      {id: 'cardD', displayName: 'card D' ,isSelected: true},

    ],
  },

];

export default items;
