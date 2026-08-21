import Swal from "sweetalert2";

export function useConfirm() {
  async function confirmDanger(options: { title: string; text?: string; confirmText?: string }) {
    const result = await Swal.fire({
      title: options.title,
      text: options.text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: options.confirmText ?? "Confirmer",
      cancelButtonText: "Annuler",
      confirmButtonColor: "#E55555",
      cancelButtonColor: "var(--body-color)",
      reverseButtons: true,
    });
    return result.isConfirmed;
  }

  async function confirmAction(options: { title: string; text?: string; confirmText?: string }) {
    const result = await Swal.fire({
      title: options.title,
      text: options.text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: options.confirmText ?? "Confirmer",
      cancelButtonText: "Annuler",
      confirmButtonColor: "var(--primary)",
      reverseButtons: true,
    });
    return result.isConfirmed;
  }

  return { confirmDanger, confirmAction };
}
