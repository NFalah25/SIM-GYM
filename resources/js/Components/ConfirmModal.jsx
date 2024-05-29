import ButtonNew from "./ButtonNew";

function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="rounded-lg bg-slate-800 p-6 shadow-lg">
                <h2 className="mb-4 text-lg font-semibold text-slate-100">
                    {title}
                </h2>
                <p className="mb-6 text-slate-100">{message}</p>
                <div className="flex justify-end space-x-4">
                    <ButtonNew variant="secondary" onClick={onClose}>
                        Cancel
                    </ButtonNew>
                    <ButtonNew variant="danger" onClick={onConfirm}>
                        Delete
                    </ButtonNew>
                </div>
            </div>
        </div>
    );
}

ConfirmModal.defaultProps = {
    title: "Confirm Delete",
    message: "Are you sure you want to delete this item?",
};

export default ConfirmModal;
