
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
      {id: 'cardA', displayName: 'card A' ,isSelected: true},
      {id: 'cardB', displayName: 'card B' ,isSelected: true},
      {id: 'cardC', displayName: 'card C' ,isSelected: false},
      {id: 'cardD', displayName: 'card D' ,isSelected: false},

    ],
  },

];

export default items;
