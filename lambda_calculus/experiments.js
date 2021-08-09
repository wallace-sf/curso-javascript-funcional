const bindThis = (fn) =>
  function () {
    return fn(this);
  };

Number.prototype.log = bindThis((ctxThis) => console.log(+ctxThis));
Function.prototype.log = bindThis((ctxThis) => console.log(ctxThis.toString()));

const I = (a) => a;

I(3).log();
I(I).log();

const SELF = (f) => f(f);

SELF(I).log();

const PRI = (a) => (_) => a;

PRI(3)(4).log();

const ULT = (_) => (b) => b;

ULT(3)(4).log();

const TRO = (f) => (a) => (b) => f(b)(a);

TRO(ULT)(3)(4).log();

const ULT2 = (a) => (b) => TRO(PRI)(a)(b);

ULT2(3)(4).log();

// boolean
const T = PRI;
const F = ULT;

T.toString = () => "true";
F.toString = () => "false";

T.log();
F.log();

const NOT = (a) => a(F)(T);

NOT(T).log();
NOT(F).log();

const AND = (a) => (b) => a(b)(a);

AND(T)(T).log();
AND(T)(F).log();
AND(F)(T).log();
AND(F)(F).log();

const OR = (a) => (b) => a(a)(b);

OR(T)(T).log();
OR(T)(F).log();
OR(F)(T).log();
OR(F)(F).log();

const EQ = (a) => (b) => a(b)(NOT(b));

EQ(T)(T).log();
EQ(T)(F).log();
EQ(F)(T).log();
EQ(F)(F).log();

const XOR = (a) => (b) => NOT(EQ(a)(b));

XOR(T)(T).log();
XOR(T)(F).log();
XOR(F)(T).log();
XOR(F)(F).log();
