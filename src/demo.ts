interface Contact {
  id: number;
  name: string;
  clone(): Contact;
}

function cloneContact(source: Contact): Contact {
  return Object.apply({}, source);
}

const a: Contact = {
  id: 123,
  name: "Homer Simpson",
  clone(): Contact {
    return cloneContact(this);
  }
};

const b = a.clone();

console.log(b.name);
