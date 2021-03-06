import Storage from './../storage';

/////////////////////////////////////////////////////
describe('test storage', () => {
  let storage;
  it('create object', (done) => {
    storage = new Storage();
    done();
  });
  it('add data', (done) => {
    storage.addData('1',{first:"test 1th"});
    storage.addData('2',{second:"test 2nd"});
    storage.addData('3',{third:"test 3rd"});
    storage.addData('4',{fourth:"test 4th"});
    if(localStorage.length == 4) {
      done();
    } else {
      throw "don't add";
    }
  });
  it('remove data', (done) => {
    storage.removeData('1');
    if(localStorage.length == 3) {
      done();
    } else {
      throw "don't removed";
    }
  });
  it('all storage return', (done) => {
    console.log(storage.getAllStorage());
    done();
  });
  it('claer all storage', (done) => {
    storage.clearAllData();
    if(localStorage.length === 0) {
      done();
    } else {
      throw "don't clear";
    }
  });
});
