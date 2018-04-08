import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: 'Living',
        amount: 199950,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Airplane Ticket',
        note: 'Vacation',
        amount: 195000,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: '4',
        description: 'Toy',
        note: 'Fun',
        amount: 1195,
        createdAt: 1000000
    },
    {
        id: '5',
        description: 'Gummy Bears',
        note: 'Food',
        amount: 19590,
        createdAt: 892834
    }
]

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2], expenses[4], expenses[1]
    ]);
});

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([
        expenses[2], expenses[3], expenses[4], expenses[0]
    ])
});