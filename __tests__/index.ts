import pathToRoutePath from '../src';

test('addTwo adds two', () => {
  expect(pathToRoutePath('./index.route.tsx')).toBe('/');
});

test('addTwo adds two', () => {
  expect(pathToRoutePath('./hello.route.tsx')).toBe('/hello');
});
test('addTwo adds two', () => {
  expect(pathToRoutePath('./hello/world.route.tsx')).toBe('/hello/world');
});

test('addTwo adds two', () => {
  expect(pathToRoutePath('./user/_id.route.tsx')).toBe('/user/:id');
});

test('addTwo adds two', () => {
  expect(pathToRoutePath('./user/-id.route.tsx')).toBe('/user/:id?');
});

test('addTwo adds two', () => {
  expect(pathToRoutePath('./detail_id.route.tsx')).toBe('/detail/:id');
});

test('addTwo adds two', () => {
  expect(pathToRoutePath('./detail_id_name-age.route.tsx')).toBe(
    '/detail/:id/:name/:age?',
  );
});
test('addTwo adds two', () => {
  expect(pathToRoutePath('./testDemo/_UserId.route.tsx')).toBe(
    '/test_demo/:UserId',
  );
});
