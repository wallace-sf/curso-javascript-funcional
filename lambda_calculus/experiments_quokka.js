let r;

const I = (a) => a;

r = I(3);
r;

r = I(I);
r;

const SELF = (f) => f(f);
r = SELF(I);
r;

const PRI = (a) => (_) => a;

r = PRI(3)(4);
r;

const ULT = (_) => (b) => b;

r = ULT(3)(4);
r;

const TRO = (f) => (a) => (b) => f(b)(a);

r = TRO(ULT)(3)(4);
r;

const ULT2 = (a) => (b) => TRO(PRI)(a)(b);

r = ULT2(3)(4);
r;

// boolean
const T = PRI;
const F = ULT;

T.inspect = () => "true";
F.inspect = () => "false";
T;
F;

const NOT = (a) => a(F)(T);

r = NOT(T);
r;

r = NOT(F);
r;

const AND = (a) => (b) => a(b)(a);
r = AND(T)(T);
r;

r = AND(T)(F);
r;

r = AND(F)(T);
r;

r = AND(F)(F);
r;

const OR = (a) => (b) => a(a)(b);
r = OR(T)(T);
r;

r = OR(T)(F);
r;

r = OR(F)(T);
r;

r = OR(F)(F);
r;

const EQ = (a) => (b) => a(b)(NOT(b));

r = EQ(T)(T);
r;

r = EQ(T)(F);
r;

r = EQ(F)(T);
r;

r = EQ(F)(F);
r;

const XOR = (a) => (b) => NOT(EQ(a)(b));

r = XOR(T)(T);
r;

r = XOR(T)(F);
r;

r = XOR(F)(T);
r;

r = XOR(F)(F);
r;
