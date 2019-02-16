var assert = require('chai').assert;
var MyLinkedList = require('../src/JumpshotLinkedList');

describe('Linked list', () => {

    describe('Construction', () => {

        it('should construct empty list', () => {
            let list = new MyLinkedList();
            assert.isOk(list);
            assert.isNull(list._first);
            assert.isNull(list._last);    
        });

        it('should construct non-empty list, if argument is array', () => {
            let list = new MyLinkedList([1, 2, 3]);
            assert.isOk(list, 'list object exist');
            assert.isNotNull(list.first, 'first node not null');
            assert.isNotNull(list.first, 'last node not null');
            assert.strictEqual(1, list.first.value);
            assert.strictEqual(2, list.first.next.value);
            assert.strictEqual(3, list.first.next.next.value);
        });

        it('should construct empty list, if argument is not array', () => {
            let list = new MyLinkedList('str');
            assert.isOk(list);
            assert.isNull(list.first);
            assert.isNull(list.last);
        });
    }),
    
    describe('Check find nodes and iterate list', () => {

        let list = new MyLinkedList([0, 1, 2, 3, 4, 5]);

        it('should find nodes on given position', () => {
            assert.equal(0, list.findByPosition(0).value);
            assert.equal(2, list.findByPosition(2).value);
            assert.equal(5, list.findByPosition(5).value);
            assert.equal(null, list.findByPosition(6));
            assert.equal(null, list.findByPosition(-1));
            assert.equal(null, list.findByPosition());
            assert.equal(null, list.findByPosition(undefined));
        });
    });

    describe('Check find nodes and iterate list', () => {

        let list = new MyLinkedList([0, 1, 2, 3, 4, 5]);

        it('should find nodes on given position', () => {
            assert.equal(0, list.findByPosition(0).value);
            assert.equal(2, list.findByPosition(2).value);
            assert.equal(5, list.findByPosition(5).value);
            assert.equal(null, list.findByPosition(6));
            assert.equal(null, list.findByPosition(-1));
            assert.equal(null, list.findByPosition());
            assert.equal(null, list.findByPosition(undefined));
        });
    });

    describe('Check ability to delete any item', () => {

        let list = new MyLinkedList([0, 1, 2, 3, 4, 5]);

        it('should find nodes on given position', () => {
            list.removeNode(list.findByPosition(5))
            assert.equal(4, list.findByPosition(4).value);
            list.removeNode(list.findByPosition(3))
            assert.equal(4, list.findByPosition(3).value);
            list.removeNode(list.findByPosition(0))
            assert.equal(1, list.findByPosition(0).value);
            list.removeNode(list.findByPosition(0))
            list.removeNode(list.findByPosition(0))
            assert.equal(4, list.findByPosition(0).value);          
            list.removeNode(list.findByPosition(0))
            assert.equal(null, list.findByPosition(0));          

        });
    });

    describe('Check count item', () => {

        it('should be null for empty list', () => {
            let list = new MyLinkedList('str');
            list.countLength()
            assert.equal(null, list.length);   
        }),
        it('count singular items', () => {
            list = new MyLinkedList([1]);
            list.countLength()
            assert.equal(1, list.length);   
        }),
        it('count odd lists', () => {
            list = new MyLinkedList([0, 1, 2, 3, 4]);
            list.countLength()
            assert.equal(5, list.length);       
        }),
        it('count event lists', () => {
            list = new MyLinkedList([0, 1, 2, 3, 4, 5]);
            list.countLength()
            assert.equal(6, list.length);            
        });
    });


    describe('Check middle item removed', () => {

        it('should be null for empty list', () => {
            let list = new MyLinkedList('str');
            list.countLength()
            list.removeMiddleItem()
            assert.equal(null, list.length);   
        }),
        it('should not remove last item in the list', () => {
            list = new MyLinkedList([1]);
            list.countLength()
            list.removeMiddleItem()
            list.countLength()
            assert.equal(1, list.length);   
            assert.equal(1, list.length);   
        }),
        it('should remove ceil(1/2) item for odd lists', () => {
            list = new MyLinkedList([0, 1, 2, 3, 4]);
            list.countLength()
            list.removeMiddleItem()
            list.countLength()
            assert.equal(4, list.length);  
            assert.deepEqual(list.toArray(), [0, 1, 3, 4]);     
        }),
        it('should remove ceil(1/2) item for even lists', () => {
            list = new MyLinkedList([0, 1, 2, 3, 4, 5]);
            list.countLength()
            list.removeMiddleItem()
            list.countLength()
            assert.equal(5, list.length);  
            assert.deepEqual(list.toArray(), [0, 1, 2, 4, 5]); 
        });
    });
})   
