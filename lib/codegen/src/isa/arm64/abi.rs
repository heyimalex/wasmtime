//! ARM 64 ABI implementation.

use super::registers::{FPR, GPR};
use ir;
use isa::RegClass;
use regalloc::RegisterSet;
use settings as shared_settings;

/// Legalize `sig`.
pub fn legalize_signature(
    _sig: &mut ir::Signature,
    _flags: &shared_settings::Flags,
    _current: bool,
) {
    unimplemented!()
}

/// Get register class for a type appearing in a legalized signature.
pub fn regclass_for_abi_type(ty: ir::Type) -> RegClass {
    if ty.is_int() {
        GPR
    } else {
        FPR
    }
}

/// Get the set of allocatable registers for `func`.
pub fn allocatable_registers(_func: &ir::Function) -> RegisterSet {
    unimplemented!()
}