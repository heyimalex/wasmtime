initSidebarItems({"enum":[["MachTerminator","Describes a block terminator (not call) in the vcode, when its branches have not yet been finalized (so a branch may have two targets)."]],"mod":[["abi","ABI definitions."],["adapter","Adapter for a `MachBackend` to implement the `TargetIsa` trait."],["blockorder","Computation of basic block order in emitted code."],["compile","Compilation backend pipeline: optimized IR to VCode / binemit."],["lower","This module implements lowering (instruction selection) from Cranelift IR to machine instructions with virtual registers. This is almost the final machine code, except for register allocation."],["pretty_print","Pretty-printing for machine code (virtual-registerized or final)."],["sections","In-memory representation of compiled machine code, in multiple sections (text, constant pool / rodata, etc). Emission occurs into multiple sections simultaneously, so we buffer the result in memory and hand off to the caller at the end of compilation."],["vcode","This implements the VCode container: a CFG of Insts that have been lowered."]],"struct":[["MachCompileResult","The result of a `MachBackend::compile_function()` call. Contains machine code (as bytes) and a disassembly, if requested."]],"trait":[["MachBackend","Top-level machine backend trait, which wraps all monomorphized code and allows a virtual call from the machine-independent `Function::compile()`."],["MachInst","A machine instruction."],["MachInstEmit","A trait describing the ability to encode a MachInst into binary machine code."]]});