import ResponsiveImage from "@/components/ResponsiveImage";
import { getLayout } from "@/layouts/DefaultLayout";

const AddToHomeScreen = () => {
  return (
    <div className="bg-black min-h-screen pb-12 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How to PopChat to Your iOS Home Screen</h2>
          <p className="mt-4 text-lg text-gray-400">Follow these simple 3 steps to add our website to your iPhone or iPad home screen.</p>
        </div>

        <div className="mt-12 space-y-10">
          {/* Step 1 */}
          {/* <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Step 1: Open Safari and Navigate to Our Website</h3>
            <p className="mt-2 text-gray-600">Open the Safari browser on your iOS device and go to our website.</p>
            <div className="mt-4 flex justify-center relative">
              <ResponsiveImage src="/s1.jpg" />
            </div>
          </div> */}

          {/* Step 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Step 1: Tap the Share Button</h3>
            <p className="mt-2 text-gray-600">Tap the Share button at the bottom of the Safari window (the square with an arrow pointing out of it).</p>
            <div className="mt-4 flex justify-center relative">
              <ResponsiveImage src="/s1.jpg" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Step 2: Add to Home Screen</h3>
            <p className="mt-2 text-gray-600">In the Share menu, scroll down and tap "Add to Home Screen".</p>
            <div className="mt-4 flex justify-center relative">
              <ResponsiveImage src="/s2.jpg" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Step 3: Confirm and Add</h3>
            <p className="mt-2 text-gray-600">In the next screen, you can rename the icon if you want. Then, tap "Add" in the top right corner.</p>
            <div className="mt-4 flex justify-center relative">
              <ResponsiveImage src="/s3.jpg" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Done!</h3>
            <p className="mt-2 text-gray-600">Now you can find the PopChat on your home screen!</p>
            <div className="mt-4 flex justify-center relative">
              <ResponsiveImage src="/s4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddToHomeScreen.getLayout = getLayout
export default AddToHomeScreen;
