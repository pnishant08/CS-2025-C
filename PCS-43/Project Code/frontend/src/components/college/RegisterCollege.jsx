import React, { useState } from "react";
import { Input, Upload, Image, message, Button } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import GenerateURN from "../../utils/generateURN";

const RegisterCollege = () => {
  const [form, setForm] = useState({
    collegeId: "",
    collegeName: "",
    principalName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [coverImg, setCoverImg] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleCoverChange = ({ file }) => {
    setCoverImg(file);
    const reader = new FileReader();
    reader.onload = (e) => setCoverPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const beforeUpload = (file) => {
    handleCoverChange({ file });
    return false;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (fileList.length === 0) {
      message.error("Please upload a logo.");
      return;
    }

    if (!coverImg) {
      message.error("Please upload a Cover Image.");
      return;
    }

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    data.append("LogoImg", fileList[0].originFileObj);
    data.append("coverImg", coverImg);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/colleges/registercollege`,
        data,
        {
          headers: {
            unq: GenerateURN(),
          },
        }
      );
      message.success("College registered successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      message.error("Error registering college.");
    } finally {
      setForm({
        collegeId: "",
        collegeName: "",
        principalName: "",
        email: "",
        phone: "",
        websiteUrl: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      });
      setFileList([]);
      setCoverImg(null);
      setCoverPreview(null);
      setPreviewImage("");
      setPreviewOpen(false);
      document.querySelector("form").reset();
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
      <h1 className="text-2xl font-bold text-center mb-5 text-black">
        Register College
      </h1>

      <div className="flex justify-center mb-6">
        <Upload
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="w-full space-y-1.5">
          <label htmlFor="collegeId" className="text-black">
            College Id <span className="text-red-600">*</span>
          </label>
          <Input
            value={form.collegeId}
            name="collegeId"
            placeholder="CollegeId"
            className="p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full space-y-1.5">
          <label htmlFor="collegeName" className="text-black">
            College Name <span className="text-red-600">*</span>
          </label>
          <Input
            value={form.collegeName}
            name="collegeName"
            placeholder="College Name"
            className="p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full space-y-1.5">
          <label htmlFor="principalName" className="text-black">
            Director Name <span className="text-red-600">*</span>
          </label>
          <Input
            value={form.principalName}
            name="principalName"
            placeholder="Director Name"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full space-y-1.5">
          <label htmlFor="websiteUrl" className="text-black">
            Website
          </label>
          <Input
            value={form.websiteUrl}
            type="text"
            name="websiteUrl"
            placeholder="Website"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full space-y-1.5 flex items-center gap-10">
          <label htmlFor="cover" className="text-black">
            Cover Image <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-5">
            <Upload beforeUpload={beforeUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Select Cover Image</Button>
            </Upload>
            {coverPreview && (
              <p className="text-green-500 text-nowrap">
                {coverImg?.name?.length > 20
                  ? coverImg.name.slice(0, 20) + "..."
                  : coverImg.name}
              </p>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-full space-y-1.5">
            <label htmlFor="email" className="text-black">
              College Email <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.email}
              type="email"
              name="email"
              placeholder="College Email"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full space-y-1.5">
            <label htmlFor="phone" className="text-black">
              College Phone <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.phone}
              type="tel"
              name="phone"
              placeholder="College Phone"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-full space-y-1.5">
            <label htmlFor="city" className="text-black">
              City <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.city}
              name="city"
              placeholder="City"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full space-y-1.5">
            <label htmlFor="state" className="text-black">
              State <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.state}
              name="state"
              placeholder="State"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-full space-y-1.5">
            <label htmlFor="country" className="text-black">
              Country <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.country}
              name="country"
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full space-y-1.5">
            <label htmlFor="postalCode" className="text-black">
              Postal Code <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.postalCode}
              name="postalCode"
              placeholder="Postal Code"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          {loading?" Submitting...":"Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegisterCollege;
