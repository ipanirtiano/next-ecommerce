type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full text-gray-700 mt-[10px]">
      <div className="w-full bg-gray-100 grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-5">
        <div>
          <h6 className="font-semibold mb-2">La Ada</h6>
          <p className="text-xs text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            recusandae, totam praesentium officiis consectetur placeat unde
            doloremque quam perspiciatis in. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut recusandae, totam praesentium
            officiis consectetur placeat unde doloremque quam perspiciatis in.
          </p>
        </div>

        <div>
          <h6 className="font-semibold mb-2">Home</h6>
          <p className="text-xs text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            recusandae, totam praesentium officiis consectetur placeat unde
            doloremque quam perspiciatis in. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut recusandae, totam praesentium
            officiis consectetur placeat unde doloremque quam perspiciatis in.
          </p>
        </div>
        <div>
          <h6 className="font-semibold mb-2">Top Categories</h6>
          <p className="text-xs text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            recusandae, totam praesentium officiis consectetur placeat unde
            doloremque quam perspiciatis in. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut recusandae, totam praesentium
            officiis consectetur placeat unde doloremque quam perspiciatis in.
          </p>
        </div>
        <div>
          <h6 className="font-semibold mb-2">About Us</h6>
          <p className="text-xs text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            recusandae, totam praesentium officiis consectetur placeat unde
            doloremque quam perspiciatis in. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut recusandae, totam praesentium
            officiis consectetur placeat unde doloremque quam perspiciatis in.
          </p>
        </div>
      </div>
      <div className="text-center text-xs bg-gray-200 py-1">
        @La Ada | system reserved by Ipan Iritiano 2023
      </div>
    </div>
  );
};

export default Footer;
