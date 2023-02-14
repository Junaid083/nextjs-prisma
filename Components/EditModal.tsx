import { Fragment, useState, useRef } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";

const EditModal = (props: any ) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  const cancelButtonRef = useRef(null);
  const { id, name, email, position } = props.data;
  const [formData, setFormData] = useState(props.data);


  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveUser = async (e: any) => {
    e.preventDefault();
    props.callBack(formData)
    // setFormData(defaultValue);
    const response = await fetch(`/api/updateUser/${id}`, {
      method: "POST",
      body: JSON.stringify(formData, id),
    });
    return await response.json();
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        <FiEdit size={20} className="text-green-500 stroke-current" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900/25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-md p-4 overflow-hidden text-left align-middle bg-white shadow-xl dark:bg-gray-700 dark:text-white transition-all transform rounded-2xl space-y-4">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className=" relative px-6 py-6 lg:px-8">
                      <form className="space-y-6" onSubmit={saveUser}>
                        <div>
                          <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputs}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          >
                            {/* {name} */}
                          </input>
                        </div>

                        <div>
                          <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputs}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                          ></input>
                        </div>

                        <div>
                          <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                            Your Position
                          </label>
                          <input
                            type="text"
                            name="position"
                            id="position"
                            value={formData.position}
                            onChange={handleInputs}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          ></input>
                        </div>
                      </form>
                    </div>

                    <div className="mt-2">
                      <div className="space-y-6 flex justify-center mb-3">
                        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    className="px-4 py-3 text-xs font-bold text-blue-500 dark:text-white uppercase bg-transparent dark:hover:bg-gray-800 border border-blue-500 dark:border-white hover:text-blue-700 dark:hover:text-white hover:border-blue-700 dark:hover:border-white rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={(e) => {
                      saveUser(e);
                      setOpen(false);
                    }}
                    ref={cancelButtonRef}
                  >
                    Update
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditModal;
